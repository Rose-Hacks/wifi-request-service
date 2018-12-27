const functions = require("firebase-functions");
const cors = require("cors")({
  origin: true
});

let credentials = [
  {
    username: "Ada",
    password: "Lovelace"
  },
  {
    username: "Grace",
    password: "Hopper"
  },
  {
    username: "Jean",
    password: "Bartik"
  },
  {
    username: "das",
    password: "djklf"
  }
];

exports.wifi = functions.https.onRequest((req, res) => {
  let success = true;
  let message;
  let entry;
  const length = credentials.length;

  return cors(req, res, () => {
    if (length === 0) {
      success = false;
      message = "No more wifi credentials, please contact organizer";
    } else {
      const randomIndex = Math.floor(Math.random() * length);
      entry = credentials.splice(randomIndex, 1)[0];
    }

    const response = {
      success,
      message,
      entry
    };

    res.send(response);
  });
});
