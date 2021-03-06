const express = require("express");
const router = express.Router();
const passport = require("passport");

//首先向fb取得授權資料email profile
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email", "public_profile"] })
);
//fb授權許可後回傳callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/user/login"
  }),
  function(req, res) {
    res.redirect("/");
  }
);
module.exports = router;
