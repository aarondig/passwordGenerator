# Password Generator
<img src="Assets/_Users_Aaron_Desktop_passwordGenerator_Develop_index.html.png"
     alt="Banner"
     style="padding-bottom: 20px"/>

<br>

## Objective
Using a prewritten HTML and CSS template, use Javascript to create a functional password generator that prompts user to input desired password length and character styles. (Uppercase, Lowercase, Numbers, and Special Characters)

<br>

## Technologies Used

* Javascript
* HTML
* Unicode
* Visual Studio Code

<br>

## How it works

<br>

### Prompts

When user clicks the 'Generate' button, a series of prompts and confirm alerts ask the user about their specific preferences in the password that is generated.

<img src="Assets/Screen Shot 2020-09-19 at 10.43.54 PM.png"
     alt="PromptCode"
     style="width: 45%; padding-bottom: 20px"/>
<img src="Assets/Screen Shot 2020-09-19 at 10.38.47 PM.png"
     alt="PromptExample"
     style="width: 45%; padding-bottom: 20px"/>

<br>
<br>

If a prompt is confirmed, their **var** value becomes true and triggers **if statements** within the 'main' function.

<br>
<br>

<img src="Assets/Screen Shot 2020-09-19 at 10.21.00 PM.png"
     alt="firstIf"
     align="center"
     style="width: 75%; padding-bottom: 20px"/>

<br>

These **if statements** push items into the empty array of 'characterTypes.'

<br>

### ChrChoice Randomizer

Inside a **for loop** that runs however many times the user inputs to be their password length, the variable of 'chrChoice' randomly chooses between the items in the array.
<br>

<img src="Assets/Screen Shot 2020-09-19 at 11.12.47 PM.png"
     alt="firstIf"
     align="center"
     style="width: 75%; padding-bottom: 20px"/>
<br>

### Unicode Randomizer

Depending on which item in the array is chosen, an **if statement** is triggered that randomly generates a number between a given set of values, then converts them to letters based on its Unicode equivalent. Then the chosen letter is added to the **placeholder** HTML property in the 'textarea' element.

<br>

<img src="Assets/Screen Shot 2020-09-19 at 11.13.43 PM.png"
     alt="firstIf"
     align="left"
     style="width: 55%; padding-bottom: 0px"/>
<img src="Assets/iso-8859-5-php-orange.png"
     alt="firstIf"
     align="right"
     style="width: 45%; padding-bottom: 20px"/>
<img src="Assets/Screen Shot 2020-09-19 at 11.37.46 PM.png"
     alt="firstIf"
     align="left"
     style="width: 55%; padding-bottom: 0px"/>
<img src="Assets/Screen Shot 2020-09-19 at 11.38.23 PM.png"
     alt="firstIf"
     align="left"
     style="width: 55%; padding-bottom: 0px"/>


.
<br>
<br>
<br>
<br>
<br>

## Author
<br>
Aaron Diggdon

<br>
<br>

## Licence
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](Licence.txt)






