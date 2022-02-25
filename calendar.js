require("dotenv").config();
console.log(process.env);

const { google } = require("googleapis");

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  process.env.Client_ID,
  process.env.Client_Secret
);

oAuth2Client.setCredentials({
  refresh_token:
    // Must refresh token every 3600 Seconds
    "1//04RMKrRsFROuICgYIARAAGAQSNwF-L9IrIW9faDiqzsDRh-DnkGKh_QwYdqIZ1aH3pNiPojl7A7rJgTb2x3sUp3NmHYK_Nu17nZs",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
