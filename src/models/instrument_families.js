"use strict";

const PubSub = require("../helpers/pub_sub.js");

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  const names = this.data.map((type) => {
    return type.name;
  });
  console.log(names);
  PubSub.publish("InstrumentFamilies:display-list", names);

  PubSub.subscribe("Dropdown:selected-name", (event) => {
    const name = event.detail;
    const chosenType = this.data.find((type) => {
      return type.name === name;
    });
    console.log(chosenType);
    PubSub.publish("InstrumentFamilies:chosen-type", chosenType);
  });
};


module.exports = InstrumentFamilies;
