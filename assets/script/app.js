'use strict';
// import { getElement, listen } from './utils.js';
// imports not working, make sure to ask teacher
function getElement(selector, scope = document) { return scope.getElementById(selector); }
// select HTML element 
function select(selector, scope = document) { return scope.querySelector(selector); }
// select a list of HTML elements as an array
function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
// adding event listener
function listen(event, selector, callback) { return selector.addEventListener(event, callback); }

// getting elements

let createButton = getElement('createButton');
let logText = getElement('log-text');
let gridContainer = getElement('grid-container');

let shapeSelect = getElement('shapeSelect');
let selectCircle = getElement('selectCircle');
let selectSquare = getElement('selectSquare');

let colourSelect = getElement('colourSelect');
let selectBlue = getElement('selectBlue');
let selectGreen = getElement('selectGreen');
let selectOrange = getElement('selectOrange');
let selectPink = getElement('selectPink');
let selectPurple = getElement('selectPurple');

let square = getElement('square');
let circle = getElement('circle');

// shapes
class Shape {
  _name;
  set name(value) { this._name = value; }
  get name() { return this._name; }

  _colour;
  set colour(value) { this._colour = value; }
  get colour() { return this._colour; }

  getInfo() { return `This shape is a ${this._colour.toLowerCase()} ${this._name.toLowerCase()}.`; }
}

let createdShapes = [];

// creating
let spaceForMore = true;
let shapes = getElement('shape');
let shapeIndex = 0;

const createShape = () => {
  console.log(verifyShapes(createdShapes));
  let selectedShape = shapeSelect.value;
  let selectedColour = colourSelect.value;
  let newShape = new Shape();
  newShape.name = selectedShape;
  newShape.colour = selectedColour;
  createdShapes.push(newShape);
  gridContainer.innerHTML += `<div id='shape' class='${newShape.name} ${newShape.colour}'>${shapeIndex}</<div>`;
  logText.textContent = `New ${newShape.colour.toLowerCase()} ${newShape.name.toLowerCase()} created.`;
  console.log(`New ${newShape.colour.toLowerCase()} ${newShape.name.toLowerCase()} created.`);
  shapeIndex++;
  console.log(createdShapes);
}

function checkShape() {
  if (createButton.value === "Create" && spaceForMore === true) {
    createShape();
  } else if (createButton.value === "Reset") {
    logText.textContent = "Too many shapes! Resetting!";
    console.log('Too many shapes!');
    resetShapes();
  }
}

listen('click', createButton, checkShape);

function verifyShapes(array) {
  if (array.length >= 19) {
    createButton.value = "Reset";
    return false;
  } else {
    return true;
  }
}

function resetShapes() {
  emptyBox();
  emptyArray(createdShapes);
  createButton.value = "Create";
  shapeIndex = 0;
  spaceForMore = true;
  console.log(createdShapes);
}

function emptyBox() {
  gridContainer.innerHTML = "";
}

function emptyArray(array) {
  for (let i = 0; i <= 20; i++) {
    array.pop();
  }
}

// get info

function shapeInfo() {
  if(event.target.id === 'shape') {
    let clickedShape = event.target;
    let clickedIndex = clickedShape.innerHTML[0];
    let foundShape = shapeConnect(clickedIndex, createdShapes);
    logText.textContent = foundShape.getInfo();
    console.log(foundShape.getInfo());
  }
  
}

function shapeConnect(clickedNum, array) {
  for (let index in array) {
    if (index === clickedNum) {
      return array[index];
    }
  }
}

listen('click', gridContainer, shapeInfo);