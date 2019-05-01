# movie-chat-turtle

React native app to be used as a challenge for Turtle.

## Tested with

The application was tested using a iOS(iPhone 6S) device, unfortunately I don't have a Android device to test the app with it.

## How to use and test

*PS: It's necessary that you have a mobile device that has Expo app, and a computer that can run the Expo CLI.*

Clone the repository to a folder of your choice, redirect to the cloned repository and execute the following command:

```javascript
yarn install
```

After the installation of the libs and dependencies, start the project executing the command:

```javascript
yarn start
```

Use the mobile device camera to scan the QRCode and run the project.

## Architecture

The project was architectured at the following way:

- src
  - components      // Reusable components and dumb components
  - screens         // Mobile screens that have a state 
  - data            // Data movie
  - helpers         // Methods and functions to manipulate data
  - config          // Firebase credentials and configuration
- App.js

## Libs

Below we can see all the libs used in the project:

|       Name       |                                                                                         Function                                                                                         |
| :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       expo       |                           A free and open source toolchain built around React Native to help you build native iOS and Android apps using JavaScript and React.                           |                                                                       |
| react-navigation |                                                                                 React native navigation                                                                                  |

## What could be better?

- Authentication to use the app
- Features to update and delete comments
- Feature to like or dislike a comment
- Show the comment' author with date and time
- Select a movie and see more information
- Show a movie image
- Create an About screen
- Animations
- Fetch movie data from IMDB Api or other

## License

MIT © 2019

## Build tool

This project was created using the [Expo](https://expo.io/).
