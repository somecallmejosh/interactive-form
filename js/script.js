(function(){
  "use strict";

  // Hide Form Elements
  // Normally would do something like this with CSS, but these elements should
  // be visible on page load if JS is not available.
  // ---------------------------------------------------------------------------
  var hiddenElement = document.getElementsByClassName('js-hidden');
  for(var i = 0; i < hiddenElement.length; i++) {
    hiddenElement[i].style.display = 'none';
  }

  // Set focus on first text selector on page load.
  // ---------------------------------------------------------------------------
  document.querySelectorAll('input')[0].focus();


// -----------------------------------------------------------------------------
// Job Role
// Get user selection for "Job Role" (probably a funciton that will be reused)
// -----------------------------------------------------------------------------
  var jobRole = document.getElementById('title');
  function jobRoleToggle() {
    var selectOption = title.options[title.selectedIndex].value,
        label = document.querySelector('.other-title'),
        input = document.getElementById('other-title');
    if(selectOption === "other") {
      label.style.display = '';
      input.style.display = '';
    } else {
      label.style.display = 'none';
      input.style.display = 'none';
    }
  }

  jobRole.addEventListener("change", jobRoleToggle);

// -----------------------------------------------------------------------------
// Color Array Updates
// -----------------------------------------------------------------------------

  // T-Shirt Type
  // Get user selection for "Design" (probably a funciton that will be reused)
  // ---------------------------------------------------------------------------

  function designSelection() {
    var design = document.getElementById('design');
    // get the value of the selected <option> in the select component.
    var selectOption = design.options[design.selectedIndex].value;

    if(selectOption.indexOf('puns') !== -1) {
      return 'puns';
    } else if(selectOption.indexOf('heart') !== -1) {
      return 'heart';
    } else {
      return false;
    }
  }

  // filter the color selections
  // ---------------------------------------------------------------------------
  var colorArray = [];
  var colorArrayCopy = [];
  var colorList = document.getElementById('color');

  // Create a new Color Object to populate colorArray
  function ColorObject(oValue, oContent) {
    this.oValue = oValue;
    this.oContent = oContent;
  }

  (function createColorArray() {
    // Self invoking... want this automagically populate
    // the color object without user involvement
    // (no mouseevents required)
    for (var i = 0; i < colorList.length; i++) {
      var oValue = colorList[i].value;
      var oContent = colorList[i].innerHTML;
      var color = new ColorObject(oValue, oContent);
      colorArray.push(color);
      colorArrayCopy.push(color);
    }
  })();

  function resetColorArray() {
    colorArray = colorArrayCopy.slice(0);
  }

  function reconstructColorOptions() {
    var colorSelect = document.getElementById('color');
    colorSelect.innerHTML = "";
    for (var i = 0; i < colorArray.length; i++) {
      var option = document.createElement('option');
      option.setAttribute("value", colorArray[i].oValue);
      option.innerHTML = colorArray[i].oContent;
      colorSelect.appendChild(option);
    }
  }

  function filterColorArray() {
    var userSelection = designSelection();
    function colorFilter(selection) {
      for (var i = colorArray.length -1; i >= 0; i--) {
        if(colorArray[i].oContent.indexOf(selection) === -1) {
          colorArray.splice(i, 1);
        }
      }
    }
    if (userSelection === 'puns') {
      colorFilter('JS Puns shirt only');
    } else if (userSelection === 'heart')  {
      colorFilter('I ♥ JS shirt only');
    }
    reconstructColorOptions();
    resetColorArray();
  }
  design.addEventListener("change", filterColorArray);


  // -----------------------------------------------------------------------------
  // Registration
  // -----------------------------------------------------------------------------
    var eventsSection = document.querySelector('.activities');
    var events = document.querySelectorAll('.activities > label');

    console.log(events[0].textContent);
    function getEventCost() {
      // Grab event cost text
      // Find dollar event cost in text indexOf($, 4)
      // Save value to array
      // Add all values in the array
    }

    function displayCost() {
      // print the display cost to the bottom of the activities section
    }

    for (each event) {
      events.addEventListener("change", filterColorArray);
    }
})();
