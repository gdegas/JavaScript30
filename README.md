# JavaScript30

This repository is created to keep track of my progress and the things I learn in the JavaScript 30 Day Challenge by @Wesbos

---

## LOGS

### Day 1 -  JavaScript Drum Kit

 I learned: 
- You can choose to the name of your attribute of an HTML tag by adding data in front of it. Ex: data-key, data-item.
- A kbd element is an element that represents user input
- Transitionend is an event listener.

### Day 2

### Day 3 - Playing with CSS Variables and JS

Learned:
- Never knew you could use variables in plain CSS without implementing SASS.
- Have never worked with input type: range before.
- Using :root in CSS lets you add variables accessible in the document object.
- Document.querySelectorAll doesn't provide an array, but rather a nodelist of items that doesn't include prototype methods built in to an Array.
- First time worked with mouse move event listener
- grabbing dataset property from a DOM node returns you an object that includes any values you set with the prefix data-.
- Use document.documentElement.style.setProperty("name of input", "value here") to change variable value

### Day 4 - Array Cardio Day 1

Learned:
- Nothing new learned, mostly just reinforced knowledge of Array methods.

### Day 5 - Flex Panels

Learned:
- .querySelectorAll doesnt return an array but a nodelist that doesn't include the mothods on the Array prototype.
- Used event.propertyName property to target which event is being triggered.
- first time using transitionend event.

### Day 6 - Type Ahead

Learned:
- You can easily create a new array with a list of data by using push method and the spread operator.
- Create a new regex object and pass in the parameter of the "word to match" in order to match the value of the input element is how you can identify what is being typed by the user. 
- the 'this' keyword in a function thats passed as an event listener to an element, is the element the event is being triggered on.
- More template literal usage while including expressions gave me insight on how I could make things look a little better when coding in JS

### Day 7 - Array Cardio Day 2

Learned:
- Re-inforced usage of every(), some(), find(), and findIndex() methods and some usages for them.

### Day 8 - Fun with HMTL5 Canvas

Learned:
- This is the first time I've used canvas at all in general so there's a few things I never knew
  - To create a canvas you create an HTML element with the tag canvas on it and set a default width and height
  - In order to work with the canvas, you have to store the element in a variable 
  - After you store the canvas in a variable you call the method getContext on it and pass in '2d' and store that in a variable to use the context, in my case I called my variable 'ctx'.
- Some of the different properties you can play around with and change on the context object are the strokeStyle (color of the stroke), lineJoin(in my case round which makes the line rounded), lineCap(which gives the end of the lines styling, my case it was 'round'), and lineWidth.
- To start off, in order to have the user start drawing, you have to determine an event that will prompt the drawing, in my case it was a mousedown event that triggered the function to draw and a mousemove event listener.
- In the draw function, in order to show anything when user clicks, you have to call beginPath() on context object, the moveTo() and pass in the coordinates of the ending x and y points of the last mousedown event, the lineTo() method and pass in the coordinates of the mousemove event object's offsetX and offsetY properties and lastly call the stroke() method on the context object.
- For a little added effect, I learned how you can set the strokeStyle property to an HSL color and by using backtics you can set the hue part of the hsl color to a variable inline by using the ${hue} syntax and increment the hue as the user moves.

### Day 9 - Dev Tools Tricks

Learned:
- To check and see what part of your JS is modifying an element, inspect the element and go to break on, and click attribute modifications. Your code will pause and highlight the JS responsible for the modification.
- For console log, if you type %c in front of your log message, you can add style attributes after a comma such as : console.log('%c Hello', 'font-size: 30px; color: blue; background: red;')
- Console.dir() will log an interactive representatino of the object passed with properties and methods available to view
- Console.group() will group console logs by whatere you pass it to by each object, and finish with console.groupEnd()
- Console.count() logs the number of times console.count is called, and has an optional argument where you can choose any label for it
- Console.time() will show you the time it take for any of the code between the console.time() statement to the console.timeEnd() statement. Useful for AJAX requests and such.

### Day 10

### Day 11

### Day 12

Learned:
- I never knew anything about a Konami code and especially didn't know that they exist among famous websites like vogue.com and buzzfeed
- I added my own sequence different from the video, his secret code was wesbos, but I kept it oldschool and did a sequence of up, down, up, down, left, right, left, right, b, a then enter. 
_ Also added a hadoken sound for added cool effect!


