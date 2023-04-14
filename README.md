Snapchat Clone

This project is a clone of the Snapchat app built with React, Redux, Camera, and Firebase. The app allows users to send and receive photos that disappear after a certain amount of time.

Getting Started

To get started with this project, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/snapchat-clone.git
Install the dependencies:
bash
Copy code
cd snapchat-clone
npm install
Set up Firebase:
Create a new Firebase project on the Firebase Console
Add a new web app to the project and copy the configuration details
Create a .env file in the root directory of the project and add the Firebase configuration details in the following format:
makefile
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Run the app:
sql
Copy code
npm start
Open the app in your browser at http://localhost:3000
Features

Users can sign up and log in with email and password authentication using Firebase
Users can take photos using the device's camera and send them to other users
Photos are stored in Firebase Storage and deleted after a certain amount of time using Firebase Cloud Functions and Firebase Cloud Messaging
Users can view and receive photos sent to them by other users
Users can view their own profile and edit their display name and profile picture
Technologies Used

This project uses the following technologies:

React
Redux
Camera
Firebase
Contributing

Contributions to this project are welcome! If you find any issues or have any suggestions for improvements, please open an issue or a pull request.

