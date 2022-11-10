import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getNotifications } from "../../api";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const handleNotification = async () => {
    const response = await getNotifications();
    // console.log(response);
    setNotificationData(response.notifications[0].message);
    // console.log(response.notifications[0].message);
    console.log(notificationData);
  };

  useEffect(() => {
    handleNotification();
  }, []);
  const notify = () => toast(notificationData);

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
export default Notification;
