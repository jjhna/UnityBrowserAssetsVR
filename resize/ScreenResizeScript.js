// Created by: Jonathan Na from the University of Hawaii at Manoa, Laboratory for Advanced Visualization & Application (LAVA)
// Script for the wall and client display x,y,z scale
// This script/functions are used by the ResizeWallScript.cs, ResizeClientScript.cs, WallInvisible.cs and ScreenResizeScript.html
"use strict";

// All of these functions work in the same way
// The function gets the Element: clientX from the ScreenResizeScript.html
// from the input form: <input class="form-control" type="number" value="5" id="clientX">
// Once the integer is entered then that value gets parsed over into variable X which is then sent to the ResizeWallScript.cs 
function FclientX() {
    var x = document.getElementById('clientX').value;
    x = parseInt(x);
    return(x);
}

function FclientY() {
    var y = document.getElementById('clientY').value;
    y = parseInt(y);
    return(y);
}

function FclientZ() {
    var z = document.getElementById('clientZ').value;
    z = parseInt(z);
    return(z);
}

function FwallX() {
    var x = document.getElementById('wallX').value;
    x = parseInt(x);
    return(x);
}

function FwallY() {
    var y = document.getElementById('wallY').value;
    y = parseInt(y);
    return(y);
}

function FwallZ() {
    var z = document.getElementById('wallZ').value;
    z = parseInt(z);
    return(z);
}

// Function that is still being tested, 
function FClients() {
    var ass = new Object();
    ass[0] = document.getElementById('clientX').value;
    ass[1] = document.getElementById('clientY').value;
    ass[2] = document.getElementById('clientZ').value;
    return(ass);
}

// Function that checks if the checkbox for the invisible box is checked or unchecked
// if so an interger is passed through (because I currently can't figure out the parseing atm)
function CheckClient() {
    var checkers = document.getElementById("inlineCheckbox1").checked;
    if (checkers == true) {
        var yesh = parseInt(1);
        return(yesh);
    }
    else {
        var nosh = parseInt(0);
        return(nosh);
    }
}