// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDydAwtwEz5wD3mmQPXsoWrf4QSmjaSg2c',
  authDomain: 'gchat-notify-78d7b.firebaseapp.com',
  projectId: 'gchat-notify-78d7b',
  storageBucket: 'gchat-notify-78d7b.firebasestorage.app',
  messagingSenderId: '590496589344',
  appId: '1:590496589344:web:d2470850b107d0176c7e45',
  measurementId: 'G-5S14XRX8CW',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        'BHWv_5Hxb3P77rL5WCLM9lS4QVFvTi3h6nbaoty5MH5Y_N50jhWPsj-lG-gLRsTweeDUh9hL0qK1oY28Ss4-Gz8',
    });
    if (token) {
      console.log('FCM Token:', token);
      return token;
    } else {
      console.warn(
        'No registration token available. Request permission to generate one.'
      );
    }
  } catch (error) {
    console.error('Error getting token:', error);
  }
};
