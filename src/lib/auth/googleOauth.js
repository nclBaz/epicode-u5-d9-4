import GoogleStrategy from "passport-google-oauth20"

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.API_URL}/users/googleRedirect`,
  },
  function (accessToken, refreshToken, profile, cb) {}
)

export default googleStrategy
