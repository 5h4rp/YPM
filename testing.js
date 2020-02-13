const { google } = require('googleapis');

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const youtube = google.youtube({
  version: 'v3',
  auth: 'key'
});

const params = {
  part: 'snippet',
  channelId: 'UClb90NQQcskPUGDIXsQEz5Q'
};

// get the blog details
youtube.playlists.list(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  res.data.items.map(item => {
    console.log(item.snippet.title);
  });
});
