Interactive Form
================

## View Demo
[Demo for review](https://somecallmejosh.github.io/interactive-form/)

## Create and link a JavaScript file to index.html
- [x] Create a JavaScript file inside the "js" folder and link it to index.html
- [ ] ~~If you're using jQuery, link index.html to the latest version of jQuery~~

## Set focus on the first text field
- [x] When the page loads, give focus to the first text field

## Job Role section of the form. Reveal a text field when the "Other" option is selected from the "Job Role" drop down menu
- [x] *Make sure you add a text input field.*
- [x] Use the id of "other-title" for the field
- [x] Add placeholder text of "Your Title" for the field

## T-Shirt Info section of the form. For the T-Shirt color menu, only display the options that match the design selected in the "Design" menu.
- [x] If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
- [x] If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

## Register for Activities section of the form.
- [x] Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
- [x] When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
- [x] As a user selects activities to register for, a running total is listed below the list of checkboxes. For example, if the user selects "Main conference" then Total: $200 should appear. If they add 1 workshop the total should change to Total: $300.

## Payment Info section of the form. Display payment sections based on chosen payment option
- [x] The"Credit Card" payment option should be selected by default and result in the display of the #credit-card div, and hide the "Paypal" and "Bitcoin information.
- [x] When a user selects the "PayPal" payment option, display the Paypal information, and hide the credit card information and the "Bitcoin" information.
- [x] When a user selects the "Bitcoin" payment option, display the Bitcoin information, and hide the credit card information.

## Form validation. Display error messages and don't let the user submit the form if any of these validation errors exist:
- [x] Name field can't be empty
- [x] Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example. You'll need to use a regular expression to get this requirement. See the list of Resources for links to learn about regular expressions.
- [x] At least one activity must be checked from the list under "Register for Activities."
- [x] Payment option must be selected.
- [x] If "Credit card" is the selected payment option, make sure the user supplied a credit card number, a zip code, and a 3 number CVV value.

## Make sure your program is free of syntax errors.
- [ ] You can monitor any errors by looking at the Developer Tools console in your browser.
- [x] Use jsHint (see Resources links) to check your code for syntax and formatting problems. (Installed as an Atom.io plugin)

## Commenting
- [x] Make sure you add code comments to explain how your programming works.

## Progressive Enhancement
- [x] When JavaScript is switched off or unavailable all information required to be filled out should be visible. For example, the “Your job role” text field should already be available if someone selects “Other”.

## Peer Review
- [ ] Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

## Browser Compatibility
NOTE: A good practice is to check your project for cross browser compatibility. Making sure that it looks and functions correctly in multiple (at least three) browsers is an important part of being a top-notch developer. If you want, leave a comment to the project reviewer about which browser(s) the project was checked to ensure they are seeing things as you have designed them.

### Some browser options:
- [x] Google Chrome Version 52.0.2743.116 (64-bit)
- [x] Mozilla Firefox 48.0
- [x] Internet Explorer/Edge
  - Tested in IE11 on Windows 7 in Virtual Box (using Modern.ie)
  - Tested in Edge on Windows 10 in Virtual Box (using Modern.ie)
- [x] Safari Version 9.1.2 (11601.7.7)


# Extra Credit
To get an "exceeds" rating, you can expand on the project in the following ways:

- [x] Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
- [x] Style the "select" menus (drop down menus) on the form, so they match the styling of the text fields (see Resources links for an article on how to improve the look of select menus using CSS and JavaScript).
- [ ] Validate the credit card number so that it's a validly formatted credit card number. (see the Resources links for information on how to do this.)
