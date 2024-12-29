# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase and Ngrok for Push Notifications

In this project, we are using **Firebase Cloud Messaging (FCM)** to send push notifications to devices. To enable communication between the Firebase service and our local development server, we use **Ngrok** to expose the server publicly over a secure HTTPS URL.

### Firebase Cloud Messaging
- **Firebase Cloud Messaging (FCM)** is used to send push notifications to devices, such as mobile phones.
- To use FCM, you need to create a Firebase project, obtain **Server Key**, and the **Device Token** for the devices you want to send notifications to.

### Ngrok for Local Development
- **Ngrok** is used to tunnel local development servers to the public internet, which allows services like Firebase to interact with your local backend.
- By running **Ngrok**, you get a publicly accessible HTTPS URL that Firebase can use to send push notifications to your local app, even during development.
- **Ngrok is also used to retrieve the device token** of the mobile device. With Ngrok, the local server becomes accessible via the generated HTTPS URL, enabling you to capture the token necessary for sending notifications.

### How to Use Firebase and Ngrok

1. **Firebase Setup**
   - Create a Firebase project.
   - Enable Firebase Cloud Messaging and obtain your **Server Key** and **Device Token**.

2. **Ngrok Setup**
   - Install [Ngrok](https://ngrok.com/) and make sure it’s set up properly.
   - To start the Ngrok tunnel and get a public HTTPS URL for your local server, use the following command:
     ```bash
     ngrok http 3000
     ```
   - The generated URL will be displayed in the terminal. You can use this URL in your Firebase configuration for push notifications.

3. **Frontend Setup**
   - In your frontend React app, ensure Firebase is initialized properly.
   - Use the generated device token (which you can obtain from the mobile app during testing with Ngrok) to register for push notifications.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
