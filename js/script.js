// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: March 2024

'use strict'
/**
 * This function calculates volume of a pyramid
 */
function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById('length').value)
  const width = parseFloat(document.getElementById('width').value)
  const height = parseFloat(document.getElementById('height').value)


  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'The Volume is: ' + volume.toFixed(2) + ' mm³'
}
