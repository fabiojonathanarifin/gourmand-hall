const notifications = require("../seeds/notifications");

module.exports.getNotifications = async (req, res) => {
  res.json({ notifications });
};
