module.exports.isLoggedIn = (req, res, next) => {
  //isAuthenticated is a passport method
  // if (!req.isAuthenticated()) {
  //   res.json({
  //     success: false,
  //     message: "you must be signed in first",
  //     redirectDestination: "/login",
  //   });
  // }
  // next();

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
