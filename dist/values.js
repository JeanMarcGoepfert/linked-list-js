"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var error = {
  min: 0,
  max: 999999999999,
  message: "Number must be between 0 and 999,999,999,999."
};

exports.error = error;
var small = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

exports.small = small;
var tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

exports.tens = tens;
var hundreds = ["", "hundred", "thousand", "million", "billion"];
exports.hundreds = hundreds;