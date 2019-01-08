"use strict";

const instrumentFamilyData = require("./data/instrument_family_data.js");
const InstrumentFamilies = require("./models/instrument_families.js");
const Dropdown = require("./views/dropdown.js");
const Details = require("./views/details.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const detailsElement = document.querySelector("#display");
  const details = new Details(detailsElement);
  details.bindEvents();

  const dropdownElement = document.querySelector("#instrument-families");
  const dropdown = new Dropdown(dropdownElement);
  dropdown.bindEvents();


  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  console.log(instrumentFamilies);
  instrumentFamilies.bindEvents();

});
