'use client';

import { requestForToken } from "./firebaseConfig.js";

export default function Home() {
  const handleSendNotification = async () => {
    const token = await requestForToken();
    if (!token) {
      alert("Failed to get FCM token");
      return;
    }

    const notificationPayload = {
        fcmToken: token,
      title: "Hello from Next.js",
      body: "This is a test notification!",
      userId: '679254cf4e61e35f2ede4d6e'
    };

    try {
      const response = await fetch("http://localhost:3000/dev/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationPayload),
      });

      const data = await response.json();
      if (data.success) {
        alert("Notification sent successfully!");
      } else {
        alert("Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <div>
      <h1>Firebase Push Notification</h1>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
}
