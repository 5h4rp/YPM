const { google } = require('googleapis');

const keys = require('./oauth2.keys.json');

const oauth2Client = new google.auth.OAuth2(
  keys.web.client_id,
  keys.web.client_secret,
  keys.web.redirect_uris[0]
);

// generate a url that asks permissions for youtube scopes
const scopes = ['https://www.googleapis.com/auth/youtube'];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes
});

// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
async function showToken() {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log(tokens);
  } catch (err) {
    console.log(err);
  }
}

showToken();
