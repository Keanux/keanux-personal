'use strict';

function getStatus(req, res) {
  res.json({
    isLogin: req.isAuthenticated(),
    user: req.user
  });
}

module.exports = getStatus;
