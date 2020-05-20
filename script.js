// HERE'S SOME CODE
// First we wrap the function inside a IIFE (https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
// Javascript has the bad habit that when you declare variables, they are global!!!

// This would lead to some ugly behaviour.

// The IIFE will create a "closed environment" where 
// you can declare the variables and they will not be
// reachable outside until you associate them into the global "window" interface (https://developer.mozilla.org/en-US/docs/Web/API/Window)

( function () { // TIP: this is an anonymous function (https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions)

  // useful info about console: (https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)
  console.log('Ahoy!!!\nconsole.log() is your best friend, use it to debug stuff');

  // get an element with a specific ID
  var hidingLink = document.getElementById('button'); // TIP: look at the document interface (https://developer.mozilla.org/en-US/docs/Web/API/Document)

  // now we bind a listener for when that element is clicked (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  // and we declare an anonymous function for the event set
  hidingLink.addEventListener('click', function(event) { // Oh Hai Anon Function
    // By declaring a function inside addEventLister,
    // a "event" object is passed through that function
    // Bonus excercise: now this link redirects to a nonexistent anchor (#).
    // find how to prevent the default behaviour of the link
    console.log(event); // Let see what's inside

    // inside the function, we can manage the element that has
    // the listener binded by using the "this" keyword (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
    console.log(this); // let's see what's inside

    // now we add a class to our element by using the "toggle" function
    // from "classlist" property (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    this.classList.add('styled');

    // OK! it's up to you doing the rest.
    // Everything is already here, you just need
    // to figure how to apply these instructions
    // on the .part-2 section
    // 
    // PS. Read the docs!
  });
})();
