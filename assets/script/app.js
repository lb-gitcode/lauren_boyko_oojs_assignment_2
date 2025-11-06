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
    let newShape = new Shape();
    createdShapes.push(newShape);
    gridContainer.innerHTML += `<div class='square'></<div>`;
    logText.textContent = "New shape created";
    console.log(`New shape created.`);
    console.log(createdShapes);
  } else {
    logText.textContent = "Too many shapes!";
    console.log('too many shapes!');
    spaceForMore = false;
  }
}

listen('click', createButton, createShape);