'use strict';

// This is the frontend integration.
//
// https://github.com/meetfranz/plugins/blob/master/docs/frontend_api.md

module.exports = (Franz, options) => {
  function getMessages() {
    let count = 0;
    let message_count = document.getElementsByClassName('sidebar-notification-indicator');

    if (message_count.length == 1 && message_count[0].innerText) {
        count = parseInt(message_count[0].innerText);
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
};
