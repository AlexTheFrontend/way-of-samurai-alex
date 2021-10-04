/**

 ▬▬ι═══════ﺤ            -═══════ι▬▬
 Created by Rutul on 10/06/21.
 ▬▬ι═══════ﺤ            -═══════ι▬▬

 **/


import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Colours } from "../../constants/colors";
import Container from "../common/Container";
import Text from "../common/Text";
import List from "../common/List";
import { connect } from "react-redux";
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

import { Ticket } from "../../model/Ticket";
import { IRootReducer } from "../../redux/reducers/main";
import { Message } from "../../model/Message";

type MessageType = 'message' | 'ticket';

type MappedMessage = {
  message: Message | Ticket,
  type: MessageType,
  id: number | string,
  updatedAt: string | undefined,
}

type MessagesViewProps = ReturnType<typeof getReduxProps> & typeof actions;

const MessagesView = (props: MessagesViewProps) => {

  const { getOtherUsername, navigatePush, getMessages, getZendeskTickets, getOrganisation } = props;

  const [loading, setLoading] = useState(true);
  const [didFetchOrganisationIds, setDidFetchOrganisationIds] = useState(new Set < number > ());

  useEffect(() => {
    const notifListener = NotificationHandler.addListener(onNotificationReceived, 'MessagesView');
    //this.getMessages(true);
    return () => {
      notifListener.remove()
    }
  }, ['once']);

  useEffect(() => {
    setLoading(true);
    getMessages2();
  }, ['once']);

  useEffect(() => {
    props.organisationIds
      .filter(orgId => !props.organisations[orgId])
      .filter(orgId => !didFetchOrganisationIds.has(orgId))
      .forEach(orgId => {
        setDidFetchOrganisationIds(current => new Set([...current, orgId]));
        getOrganisation(orgId);
      });
  }, [props.organisationIds])

  const onNotificationReceived = (props: any) => {
    switch (props.code) {
      case MessageReceived:
      case AdminMessageReceived: {
        getMessages();
        return true;
      }
    }
  };

  const getMessages2 = () => {
    Promise.all([
      new Promise < Message[] > ((resolve, reject) => getMessages(resolve, reject)),
      new Promise < Ticket[] > ((resolve, reject) => getZendeskTickets(resolve, reject))
    ]).then(([messages]) => {
      const otherUserIds = [...new Set(messages.map(m => otherUserId(m))
        .filter((idInfo) => !idInfo.isParkable)
        .map(({ id }) => id))];
      otherUserIds.forEach((id) => getOtherUsername(id));

      setLoading(false);
    }, err => {
      console.log('err', err);
    });
  }

  const otherUserId = (message: Message) => {
    const id = message.firstParticipantId === props.currentUserId ? message.secondParticipantId : message.firstParticipantId;
    return {
      id,
      isParkable: (id ?? 0) <= 0
    }
  };

  const onMessageSelect = (message: MappedMessage) => {
    console.log('onMessageSelect', message);
    if (message.type === 'message') {

      const otherUser = otherUserId(message.message as Message);
      navigatePush(Routes.MessageView, {
        otherUserId: otherUser.id,
        isParkable: otherUser.isParkable,
        messageId: message.id as number,
        ticketId: null,
        messageParkable: otherUser.isParkable
      });
    } else {
      //Zendesk ticket: other user is always Parkable
      console.log('zendesk show', message.id);
      navigatePush(Routes.MessageView, {
        otherUserId: null,
        isParkable: true,
        messageParkable: true,
        ticketMetadata: {
          subject: (message.message as Ticket).subject,
          ...(message.message as Ticket).tags
        },
        messageId: null,
        ticketId: message.id
      });
    }
  };

  const renderMessageRow = ({ item: message }: { item: MappedMessage }) => {
    // @ts-ignore
    const lastComment = _.last(message.message.comments ?? []);
    const now = moment();
    const updatedAt = moment(message.updatedAt);
    const dateFormat = now.year() !== updatedAt.year() ? `${props.dateformat} HH:mm` :
      (now.month() !== updatedAt.month() || now.date() !== updatedAt.date() ? `${props.dateformat} HH:mm` : 'HH:mm');

    const otherUser = message.type === 'message' ? otherUserId(message.message as Message) : { id: -1, isParkable: true };
    let userName = message.type === 'ticket' ? props.organisations[(message.message as Ticket).tags.organisationId as number]?.name || 'Parkable' : 'Parkable';
    if (!otherUser.isParkable) {
      userName = otherUserDisplayName(props.userNameInfos[otherUser.id] || {});
    }

    return <TouchableOpacity onPress={() => onMessageSelect(message)}>
      <View style={[styles.messageView, { flexDirection: 'row' }]}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text grey h8 style={{ flex: 2 }}>{userName}</Text>
            <Text grey right h8 style={{ flex: 1 }}>{updatedAt.format(dateFormat)}</Text>
          </View>
          {/*@ts-ignore*/}
          <Text darkGrey h7 numberOfLines={1} ellipsizeMode={'tail'}>{lastComment.body}</Text>
        </View>
        <Image style={{ width: 50, height: 50 }} source={blueArrowRight} />
      </View>
    </TouchableOpacity>
  };

  const mapMessage = (message: Message | Ticket, type: MessageType): MappedMessage => ({
    message,
    type,
    id: message.id,
    // @ts-ignore
    updatedAt: _.last(message.comments)?.createdAt
  });

  const allMessages = _.sortBy([
    ...props.messages.map(m => mapMessage(m, 'message')),
    ...props.tickets.map(t => mapMessage(t, 'ticket'))
  ], m => m.updatedAt).reverse();

  return (
    <Container
      headerProps={{ style: styles.header }}
      loading={loading}
      pushTop
      title={Strings.messages}
    >
      <List style={{ flex: 1 }}
        renderRow={renderMessageRow}
        data={allMessages} />
    </Container>
  );
}

const getReduxProps = (state: IRootReducer) => {
  const organisations = state.organisations?.organisations || {};
  const tickets = state.messages?.tickets || [];
  // tickets.forEach((t: Ticket) => {
  //     t.organisationId = t.tags.organisationId;
  //     t.organisation = organisations[t.organisationId];
  // });
  const organisationIds = [...new Set(tickets
    .map(t => t.tags.organisationId)
    .filter(t => t))] as number[];

  return {
    currentUserId: state.data.userId,
    messages: (state.messages || {}).messages || [],
    tickets,
    userNameInfos: (state.user || {}).otherUserNames || {},
    organisationIds,
    organisations,
    dateformat: state.settings.dateformat
  }
}


const actions = {
  getZendeskTickets,
  getOrganisation,
  getMessages,
  navigatePush,
  getOtherUsername
}

export default connect(getReduxProps, actions)(MessagesView as any) as React.FunctionComponent;

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