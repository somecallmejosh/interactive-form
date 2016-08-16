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
- [x] You can monitor any errors by looking at the Developer Tools console in your browser.
- [x] Use jsHint (see Resources links) to check your code for syntax and formatting problems. (Installed as an Atom.io plugin)

## Commenting
- [x] Make sure you add code comments to explain how your programming works.

## Progressive Enhancement
- [x] When JavaScript is switched off or unavailable all information required to be filled out should be visible. For example, the “Your job role” text field should already be available if someone selects “Other”.

## Peer Review
- [x] Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

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
- [x] Validate the credit card number so that it's a validly formatted credit card number. (see the Resources links for information on how to do this.)


# Feedback

##Create and link JavaScript files
index.html links to a .js file and jQuery (if using jQuery).

###Reviewer Comments:

Yes! Your index.html is linked correctly.

##Focus on the first field
When the page loads, cursor appears in the "Name" field, ready for a user to type.

###Reviewer Comments:

You've given your user a nice experience by focusing in on the "Name" field with the form loads. Great work! I also like that you made the focus a color other than blue - this project design is blue overload!

##Displaying payment sections
"Credit Card" is visible by default. Other divs are revealed based on the "payment" selection.
Payment sections for "PayPal," and "Bitcoin" are hidden until they're needed.
If user chooses "PayPal" or "Bitcoin", then hide "Credit Card" and reveal the chosen section.

###Reviewer Comments:

Your payment fields don't display until they're needed. That's great!

##Valid code
Free of syntax errors.

###Reviewer Comments:

It works! Awesome.

##Code comments
Student writes code comments to document how the code works.

##Reviewer Comments:

Your code comments are thorough and detailed, and it's clear how your code functions. I also like how you separate your comments with ------------------ it's very organized.

##Form Works Without JavaScript
All information required to fill out the form is visible when JavaScript is disabled.

###Reviewer Comments:

Your form displays all required information, even when JavaScript is turned off.

##Activity Registration
User cannot select two activities that are at the same time
Total cost of selected activities is calculate and displayed below the list of activities

###Reviewer Comments:

The features of your activity registration are working great!

##Elements that Exceeded Expectations
Job Role Section
Style drop-down menus to match style of text fields.

###Reviewer Comments:

You've put some extra work into styling your form. Excellent work!

###T-Shirt Section
Style drop-down menus to match style of text fields.
Hide the "Color:" label and drop down menu until a T-Shirt design is selected.

####Reviewer Comments:

Good work adding some extra touches to the T-Shirt section!

###Form Validation
Validate credit card number so that it matches the format of a valid credit card.

####Reviewer Comments:

Fantastic job doing some extra leg work and writing code to valid credit card numbers! I saw that you had a hard time getting the validation working, but it's working on my end! I'm very impressed that you were able to find an answer on Stack Overflow and deploy what you've learned. My one piece of advice on this section is that I think it would be valuable for you to have some sort of feedback for the user when their form is properly submitted. I filled out the form properly the first time and there is no message that says "your form as been submitted" so I wasn't sure if the validation was working properly - I had to intentionally mess up some fields to get a correction message. This won't effect your grade of course, I just thought it might be useful before putting this project into your portfolio.

##Overall Comments
Joshua,

you really hit it out of the park on this project! I've looked at your code closely and I feel that you are really sticking to best practices, have an organized file structure, and I'm very impressed. You mention "this feels nasty" in your comments, and your right, that section could use a little re-factor. I suggest doing something like this :

A section you have:

```
if(paymentContainer.value === 'credit card') {
  paymentOptionSelected = 1;
  paymentTypeSelected = 'credit card';
  if(ccHidden) {
    creditCardContainer.classList.remove('hidden');
  }
  if(!bcHidden) {
    bcContainer.classList.add('hidden');
  }
  if(!ppHidden) {
    ppContainer.classList.add('hidden');
  }
}
```

A possible (untested) refactor:
```
if(paymentContainer.value === 'credit card') {
  paymentOptionSelected = 1;
  paymentTypeSelected = 'credit card';
  if(!bcHidden && !ppHidden && ccHidden) {
    creditCardContainer.classList.remove('hidden');
    bcContainer.classList.add('hidden');
    ppContainer.classList.add('hidden');
  }
}
```

This too is a little nasty, but cuts back on some repeated code. Ideally, you would have functions for adding/removing class lists, and you could pass the containers as parameters.

Anyway, you did an awesome job and you really deserve this 'Exceeds Expectations'! I'm really glad to hear that you gain some confidence with every project : )

Good luck on the next project and happy coding!
