const express = require("express");
const router = express.Router();
const { getNotifications } = require("../controllers/notification");

//get Notification
router.get("/notifications", getNotifications);

module.exports = router;
