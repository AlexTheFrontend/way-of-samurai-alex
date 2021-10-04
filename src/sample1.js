/**

 ▬▬ι═══════ﺤ            -═══════ι▬▬
 Created by Chris on 28/08/17.
 ▬▬ι═══════ﺤ            -═══════ι▬▬

 **/


import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Colours } from "../../constants/colors";
import Container from "../common/Container";
import Text from "../common/Text";
import List from "../common/List";
import connect from "../../constants/connect";
import Strings from "../../constants/localization/localization";
import { navigatePush } from "../../redux/actions/navigation";
import { getMessages, getZendeskTickets } from "../../redux/actions/message";
import moment from 'moment';
import { AdminMessageReceived, MessageReceived } from "../../NotificationHandler";
import _ from 'lodash';
import * as Routes from "../../constants/Routes";
import blueArrowRight from '../../resources/blueArrowRight.png'
import { getOtherUsername } from "../../redux/actions/user";
import { otherUserDisplayName } from '../../constants/Util';
import * as NotificationHandler from "../../NotificationHandler";
import { getOrganisation } from "../../redux/actions/organisations";

class MessagesView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.notifListener = NotificationHandler.addListener(this.onNotificationReceived, 'MessagesView');

    this.setState({ loading: true })
    this.getMessages(true);
  }

  componentWillUnmount() {
    this.notifListener.remove()
  }

  componentDidUpdate(prevProps) {
    if (_.xor(this.props.organisationIds || [], prevProps.organisationIds || []).length > 0) {
      this.props.organisationIds
        .filter(orgId => !this.props.organisations[orgId])
        .forEach(orgId => this.props.dispatch(getOrganisation(orgId)));
    }
  }

  onNotificationReceived = (code) => {
    switch (code) {
      case MessageReceived:
      case AdminMessageReceived: {
        this.getMessages();
        return true;
      }
    }
  };

  getMessages = setLoading => {
    Promise.all([
      new Promise((resolve, reject) => this.props.dispatch(getMessages(resolve, reject))),
      new Promise((resolve, reject) => this.props.dispatch(getZendeskTickets(resolve, reject)))
    ]).then(([messages]) => {
      messages.map(m => this.otherUserId(m))
        .filter(({ isParkable }) => !isParkable)
        .forEach(({ id }) => this.props.dispatch(getOtherUsername(id)));

      if (setLoading) {
        this.setState({ loading: false });
      }
    }, err => {
      console.log('err', err);
    });
  };

  otherUserId = message => {
    const id = message.firstParticipantId === this.props.currentUserId ? message.secondParticipantId : message.firstParticipantId;
    return {
      id,
      isParkable: (id || 0) <= 0
    }
  };

  onMessageSelect = message => {

    console.log('onMessageSelect', message);
    if (message.type === 'message') {
      console.log('normal show', message.id);
      const otherUser = this.otherUserId(message.message);
      this.props.dispatch(navigatePush(Routes.MessageView, {
        otherUserId: otherUser.id,
        isParkable: otherUser.isParkable,
        messageId: message.id,
        ticketId: null,
        messageParkable: otherUser.isParkable
      }));
    } else {
      //Zendesk ticket: other user is always Parkable
      console.log('zendesk show', message.id);
      this.props.dispatch(navigatePush(Routes.MessageView, {
        otherUserId: null,
        isParkable: true,
        messageParkable: true,
        ticketMetadata: {
          subject: message.subject,
          ...message.tags
        },
        messageId: null,
        ticketId: message.id
      }));
    }
  };

  renderMessageRow = ({ item: message }) => {

    const lastComment = _.last(message.message.comments || []) || {};
    const now = moment();
    const updatedAt = moment(message.updatedAt);
    const dateFormat = now.year() !== updatedAt.year() ? `${this.props.dateformat} HH:mm` :
      (now.month() !== updatedAt.month() || now.date() !== updatedAt.date() ? `${this.props.dateformat} HH:mm` : 'HH:mm');

    const otherUser = this.otherUserId(message.message);
    let userName = (message.message.organisation || {}).name || 'Parkable';
    if (!otherUser.isParkable) {
      userName = otherUserDisplayName(this.props.userNameInfos[otherUser.id] || {});
    }

    return <TouchableOpacity onPress={() => this.onMessageSelect(message)}>
      <View style={[styles.messageView, { flexDirection: 'row' }]}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text grey h8 style={{ flex: 2 }}>{userName}</Text>
            <Text grey right h8 style={{ flex: 1 }}>{updatedAt.format(dateFormat)}</Text>
          </View>
          <Text darkGrey h7 numberOfLines={1} ellipsizeMode={'tail'}>{lastComment.body}</Text>
        </View>
        <Image style={{ width: 50, height: 50 }} source={blueArrowRight} />
      </View>
    </TouchableOpacity>
  };

  render() {

    //console.log('messages', this.props.messages, this.props.tickets);

    const mapMessage = (message, type) => ({
      message,
      type,
      id: message.id,
      updatedAt: (_.last(message.comments || []) || {}).createdAt
    });

    const allMessages = _.sortBy([
      ...this.props.messages.map(m => mapMessage(m, 'message')),
      ...this.props.tickets.map(t => mapMessage(t, 'ticket'))
    ], m => m.updatedAt).reverse();

    return (
      <Container
        headerProps={{ style: styles.header }}
        loading={this.state.loading}
        pushTop
        title={Strings.messages}
      >
        <List style={{ flex: 1 }}
          renderRow={this.renderMessageRow}
          data={allMessages} />
      </Container>
    );
  }
}

export default connect((state) => {
  const organisations = ((state.organisations || {}).organisations || {});
  const tickets = (state.messages || {}).tickets || [];
  tickets.forEach(t => {
    t.organisationId = t.tags.organisationId;
    t.organisation = organisations[t.organisationId];
  });
  const organisationIds = [...new Set(tickets
    .map(t => t.organisationId)
    .filter(t => t))];

  return {
    currentUserId: state.data.userId,
    messages: (state.messages || {}).messages || [],
    tickets,
    userNameInfos: (state.user || {}).otherUserNames || {},
    organisationIds,
    organisations,
    dateformat: state.settings.dateformat
  }
})(MessagesView);

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  messageView: {
    paddingLeft: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    backgroundColor: Colours.White,
  },
});