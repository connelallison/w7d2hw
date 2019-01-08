"use strict";

const PubSub = require("../helpers/pub_sub.js");

const Dropdown = function(dropdown) {
  this.dropdown = dropdown;
};

Dropdown.prototype.populate = function(names) {
  names.forEach((name) => {
    this.dropdown.innerHTML += `<option value="${name}">${name}</option>`;
  });
};

Dropdown.prototype.bindEvents = function() {
  PubSub.subscribe("InstrumentFamilies:display-list", (event) => {
    const names = event.detail;
    this.populate(names);
  });

  this.dropdown.addEventListener("change", (event) => {
    const name = event.target.value;
    console.log(name);
    PubSub.publish("Dropdown:selected-name", name);
  });
};

module.exports = Dropdown;
