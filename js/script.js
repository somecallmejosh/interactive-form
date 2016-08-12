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
    var selectOption = jobRole.options[jobRole.selectedIndex].value,
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

  var design = document.getElementById('design');

  function designSelection() {
    // get the value of the selected <option> in the select component.
    var selectOption = design.options[design.selectedIndex].value;
    var colorContainer = document.getElementById('colors-js-puns');

    function showColorContainer() {
      // Use js-hidden from above (to only hide if JS is available);
      var colorContainerHidden = colorContainer.classList.contains('js-hidden');
      if(colorContainerHidden) {
        colorContainer.style.display = "";
      }
    }

    if(selectOption.indexOf('puns') !== -1) {
      showColorContainer();
      return 'puns';
    } else if(selectOption.indexOf('heart') !== -1) {
      showColorContainer();
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
    var events = document.querySelectorAll('input[type="checkbox"]');
    var totalCost = 0;
    var activitiesSelected = 0;
    var selectedDate;

    function getEventCost() {
      // Aware of jshint 'strict' violations with the use of `this`
      // all following instances of "this" in this section reference
      // the clicked label in the event listener at the end of this section
      var stringContent = this.parentNode.childNodes[1].textContent;
      var priceStart = stringContent.indexOf("$");
      var price = stringContent.substring(priceStart + 1) * 1;
      var dateStart = stringContent.indexOf("—");
      var dateEnd = stringContent.indexOf(",");
      var checkedInput = this.checked;

      if(checkedInput) {
        totalCost = totalCost + price;
        activitiesSelected += 1;
      } else {
        totalCost = totalCost - price;
        if (activitiesSelected > 0) {
          activitiesSelected -= 1;
        }
      }

      selectedDate = stringContent.substring(dateStart + 2, dateEnd);
      document.querySelector('.current-price').textContent = totalCost;

      if(this.checked) {
        conflictingDates('disabled');
      } else {
        conflictingDates('enabled');
      }
    }

    function conflictingDates(checkedStatus) {
      // This function checks to see if there are conflicting dates
      for(var i = 0; i < events.length; i++) {
        var dateMatch = events[i].parentNode.childNodes[1].textContent.indexOf(selectedDate);
        if(dateMatch !== -1 && events[i].checked === false) {

          // When the user selects an item, all other items that match the date
          // and time are disabled, so conflicting events cannot be scheduled.
          if(checkedStatus === 'disabled') {
            events[i].disabled = true;
            events[i].parentNode.classList.add('disabled');
          }

          // If the user deselects an event item, all conflicting items are
          // set to be selectable again.
          if(checkedStatus == 'enabled') {
            events[i].disabled = false;
            events[i].parentNode.classList.remove('disabled');
          }
        }
      }
    }


    (function displayCost() {
      // print the display cost to the bottom of the activities section
      var priceContainer = document.createElement('footer');
      priceContainer.classList.add('price');
      priceContainer.textContent = "Total: $";
      var currentPrice = document.createElement('span');
      currentPrice.classList.add("current-price");
      currentPrice.textContent = "0";
      priceContainer.appendChild(currentPrice);
      eventsSection.appendChild(priceContainer);
    })();


    for (var j = 0; j < events.length; j++) {
      // Context of this in the getEventCost function above.
      events[j].addEventListener('change', getEventCost);
    }

    // -----------------------------------------------------------------------------
    // Payment
    // -----------------------------------------------------------------------------
    var paymentContainer = document.getElementById('payment');
    var creditCardContainer = document.getElementById('credit-card');
    var paragraphs = document.querySelectorAll('p');
    var paymentOptionSelected = 1;
    var paymentTypeSelected = 'credit card';

    (function setPAymentTextClasses(){
      for(var k = 0; k < paragraphs.length; k++) {
        paragraphs[k].parentNode.classList.add('hidden');
        var bitcoin = paragraphs[k].textContent.indexOf('Bitcoin');
        var paypal = paragraphs[k].textContent.indexOf('PayPal');
        if(bitcoin !== -1) {
          paragraphs[k].parentNode.classList.add('bitcoin');
        }
        if(paypal !== -1) {
          paragraphs[k].parentNode.classList.add('paypal');
        }
      }
      paymentContainer.options[1].setAttribute('selected', 'selected');

    })();

    function updatePayment() {
      var bcContainer = document.querySelector('.bitcoin');
      var ppContainer = document.querySelector('.paypal');
      var ccHidden = creditCardContainer.classList.contains('hidden');
      var bcHidden = bcContainer.classList.contains('hidden');
      var ppHidden = ppContainer.classList.contains('hidden');

      // This feels nasty...

      if(paymentContainer.value === 'select_method') {
        paymentOptionSelected = 0;
        paymentTypeSelected = '';
        if(!ccHidden){
          creditCardContainer.classList.add('hidden');
        }
        if(!bcHidden) {
          bcContainer.classList.add('hidden');
        }
        if(!ppHidden) {
          ppContainer.classList.add('hidden');
        }
      }

      if(paymentContainer.value === 'paypal') {
        paymentOptionSelected = 1;
        paymentTypeSelected = 'paypal';
        if(!ccHidden){
          creditCardContainer.classList.add('hidden');
        }
        if(!bcHidden) {
          bcContainer.classList.add('hidden');
        }
        if(ppHidden) {
          ppContainer.classList.remove('hidden');
        }
      }

      if(paymentContainer.value === 'credit card') {
        paymentOptionSelected = 1;
        paymentTypeSelected = 'credit card';
        if(ccHidden){
          creditCardContainer.classList.remove('hidden');
        }
        if(!bcHidden) {
          bcContainer.classList.add('hidden');
        }
        if(!ppHidden) {
          ppContainer.classList.add('hidden');
        }
      }

      if(paymentContainer.value === 'bitcoin') {
        paymentTypeSelected = 'bitcoin';
        if(!ccHidden){
          creditCardContainer.classList.add('hidden');
        }
        if(bcHidden) {
          bcContainer.classList.remove('hidden');
        }
        if(!ppHidden) {
          ppContainer.classList.add('hidden');
        }
      }
    }

    paymentContainer.addEventListener("change", updatePayment);

// -----------------------------------------------------------------------------
// Validation
// -----------------------------------------------------------------------------

  var errorContainer = document.createElement('div');
  errorContainer.classList.add('errors');
  var submitButton = document.querySelector('button');
  var formContainer = document.querySelector('form');

  formContainer.insertBefore(errorContainer, submitButton);

  formContainer.addEventListener("submit", function(e){
    // Name Validation
    errorContainer.innerHTML = "";


    var nameField = document.getElementById('name');
    if(nameField.value.length < 1) {
      e.preventDefault();
      alert("Name is required!");
    }

    if(activitiesSelected === 0) {
      e.preventDefault();
      var activityContainer = document.createElement('p');
      activityContainer.classList.add('activity-error');
      var activityError = 'An event must be selected.';
      activityContainer.innerHTML = activityError;
      errorContainer.appendChild(activityContainer);
    }

    if(!paymentOptionSelected) {
      e.preventDefault();
      var paymentContainer = document.createElement('p');
      paymentContainer.classList.add('payment-error');
      var paymentError = 'An payment option must be selected.';
      paymentContainer.innerHTML = paymentError;
      errorContainer.appendChild(paymentContainer);
    }

    if(paymentTypeSelected === 'credit card') {
      if(document.getElementById('cc-num').value.length === 0) {
        e.preventDefault();
        var ccContainer = document.createElement('p');
        ccContainer.classList.add('cc-error');
        var ccError = 'Credit Card Cannot Be Blank.';
        ccContainer.innerHTML = ccError;
        errorContainer.appendChild(ccContainer);
      }

      if(document.getElementById('zip').value.length === 0) {
        e.preventDefault();
        var zipContainer = document.createElement('p');
        zipContainer.classList.add('zip-error');
        var zipError = 'Zip Code Cannot Be Blank.';
        zipContainer.innerHTML = zipError;
        errorContainer.appendChild(zipContainer);
      }

      if(document.getElementById('cvv').value.length === 0) {
        e.preventDefault();
        var cvvContainer = document.createElement('p');
        cvvContainer.classList.add('cvv-error');
        var cvvError = 'CVV Code Cannot Be Blank.';
        cvvContainer.innerHTML = cvvError;
        errorContainer.appendChild(cvvContainer);
      }
    }

    function validateCC() {
      // Only digits, dashes or spaces
      var ccNumber = document.getElementById('cc-num').value;
      // Ensure appropriate card number length;
      if (!ccNumber.length || ccNumber.length < 15 || ccNumber.length > 16) {
        return false;
      }

      if (/[^0-9-\s]+/.test(ccNumber)) return false;

      // Will be updated by iterator values below
      var nCheck = 0,
          nDigit = 0,
          bEven = false;

      // Remove anything that isn't a number
      ccNumber = ccNumber.replace(/\D/g, "");

      // Start in reverse order
      for(var n = ccNumber.length - 1; n >= 0; n--) {
        var cDigit = ccNumber.charAt(n);
        nDigit = parseInt(cDigit, 10);

        if (bEven) {
          if((nDigit *= 2) > 9) {
            nDigit -= 9;
          }
        }

        // Add nDigit to nCheck
        nCheck += nDigit;
        bEven = !bEven;
      }

      return (nCheck % 10) === 0;
    }

    var validateCard = validateCC();
    if(!validateCard) {
      e.preventDefault();
      var ccValidationContainer = document.createElement('p');
      ccValidationContainer.classList.add('cvv-error');
      var ccValidationError = 'Credit Card Number is Not Valid.';
      ccValidationContainer.innerHTML = ccValidationError;
      errorContainer.appendChild(ccValidationContainer);
    }
  });
})();
