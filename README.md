# Title: MetaBook social network
#### Video Demo:  <https://youtu.be/tDFX7VDqL1I>
#### Description:

This project is written using React/Redux as a final project for CS50
This project is using this API: https://social-network.samuraijs.com/docs

#### Account to test functionality:

- Email: tichobl@gmail.com
- Password: 123654qaz

#### Available functionality
- Login/Logout
- Captcha protection on login attemps (after 5th attempt)
- User screen:
    * Changing profile photo and sending it to the server
    * Changing status and saving it on the server
    * Editing profile and saving it on the server
    * Adding posts (without saving on server)
    * Error validation for posts, no more than 30 symbols
    
- Users page:
    * Getting real users of this API and displaying them
    * Follow/unfollow functionality (saving on the server)
    * Default profile picture
    * Pagination
    
- Messages screen:
    * Type and add messages
    * Error validation for 50+ symbols
    
- News/Music/CS50:
    * Static pages for routing purposes with static content

- Others:    
    * custom 404 Error if you type in wrong address
    * Error validation for HTTP requests (if something goes wrong)

### Extra information

React/Redux is a very popular combination to write SPA (single page applications) these days.
I was looking for an idea what to do and as I want to become a front-end web-developer and later on
full-stack developer I decided to go with a "Social network" project aka Facebook.
My title even reflects recent rebranding of Facebook to Meta univerce.

I did a research and found that API <https://social-network.samuraijs.com/docs> to write your own social network.
I even deployed it with Vercel - <https://social-network-develop-alex.vercel.app/> but you supposed to have a paid subscription
for it to work on a hosting rather than your local environment.

Thanks for such an awesome experince David and Brian!

I will concoder to do more CS50 courses :)

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
