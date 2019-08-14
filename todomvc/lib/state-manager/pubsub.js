'use strict';

function pubsubFactory() {
  var topics = {};

  function publish(topic, arg) {
    var subscribers, len;

    if (!topics[topic]) {
      return false;
    }

    subscribers = topics[topic];
    len = subscribers ? subscribers.length : 0;

    while (len > 0) {
      subscribers[len - 1].func(arg);
      len--;
    }
  }

  function subscribe(topic, func) {
    if (typeof func !== 'function') {
      return;
    }

    if (!topics[topic]) {
      topics[topic] = [];
    }

    topics[topic].push({
      func: func
    });
  }

  return {
    publish: publish,
    subscribe: subscribe
  };
}

module.exports = {
  pubsubFactory: pubsubFactory
};
