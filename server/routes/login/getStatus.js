module.exports = function(req, res) {
  res.json({
    isLogin: req.isAuthenticated(),
    user: req.user
  });
};
