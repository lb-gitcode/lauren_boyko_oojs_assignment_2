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
  constructor (name, colour) {
    this.name = name;
    this.colour = colour;
  }

  getInfo() {
    return `This shape is a ${this.colour} ${this.name}.`;
  }
}

let createdShapes = [];

// creating
let spaceForMore = true;

const createShape = () => {
  if (createdShapes.length <= 19) {
    let selectedShape = shapeSelect.value;
    let selectedColour = colourSelect.value;
    let newShape = new Shape(selectedShape, selectedColour);
    createdShapes.push(newShape);
    gridContainer.innerHTML += `<div class='.shape ${newShape.name} ${newShape.colour}'></<div>`;
    logText.textContent = "New shape created";
    console.log(`New shape created.`);
    // listen('click', newShape, Shape.getInfo);
    console.log(createdShapes);
  } else {
    logText.textContent = "Too many shapes!";
    console.log('Too many shapes!');
    spaceForMore = false;
  }
}

listen('click', createButton, createShape);

// get info



// listen('click', shapes, Shape.getInfo);