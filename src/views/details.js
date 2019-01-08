"use strict";

const PubSub = require("../helpers/pub_sub.js");

const Details = function(details) {
  this.details = details;
};

Details.prototype.render = function(chosenType) {
  this.details.innerHTML = "";
  const name = document.createElement('h2');
  name.textContent = chosenType.name;
  const description = document.createElement("p");
  description.textContent = chosenType.description;
  const examples = document.createElement("p");
  examples.textContent = "Examples:";
  const instruments = document.createElement('ul');
  chosenType.instruments.forEach((instrument) => {
    const li = document.createElement('li');
    li.textContent = instrument;
    instruments.appendChild(li);
  });
  this.details.appendChild(name);
  this.details.appendChild(description);
  this.details.appendChild(examples);
  this.details.appendChild(instruments);
};

Details.prototype.bindEvents = function() {
  PubSub.subscribe("InstrumentFamilies:chosen-type", (event) => {
    const chosenType = event.detail;
    this.render(chosenType);
  });
};

module.exports = Details;
