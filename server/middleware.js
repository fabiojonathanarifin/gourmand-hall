module.exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({
      success: false,
      message: "you must be signed in first",
      redirectDestination: "/login",
    });
  }
};
