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

  // Job Role
  // Get user selection for "Job Role" (probably a funciton that will be reused)
  // ---------------------------------------------------------------------------
  var jobRole = document.getElementById('title');
  function jobRoleToggle() {
    // This smells a little fishy to me.
    // Seems like this should be more portable
    // There are some other select fields that will trigger some sort of
    // action later in the program. This may need refactoring.
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

})();
