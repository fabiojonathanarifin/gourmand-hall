import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getNotifications } from "../../api";
// import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const handleNotification = async () => {
    const response = await getNotifications();
    let obj = response.notifications.find((e) => e.type === "FAIL");
    setNotificationData(obj.message);
  };

  useEffect(() => {
    handleNotification();
  }, []);
  const notify = () => toast(notificationData);

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      {/* <ToastContainer /> */}
    </div>
  );
}
export default Notification;
