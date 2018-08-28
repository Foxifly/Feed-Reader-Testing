# RSS Feed - Udacity Project 4
#### Lindsay Ciastko
---

## Introduction
The purpose of this project, is to take a pre-written javascript file, and add tests through the [Jasmine](http://jasmine.github.io/). Through Jasmine, students were instructed to build different test suites to ensure variables, arrays, etc. are all defined. Additionally, through Jasmine, students were expected to test function output and build upon that. 

## How to Run
To run the specs, clone this repository or download the ZIP file. Once downloaded, run the index.html. The Jasmine tests that automatically run are located at the bottom of the page. Here, you can tell if the tests pass or fail.

## Test Suites
In this project, I have put together 4 test suites. I will highlight those, below. In these test suites, I have created various test cases in order to see if the app.js code passes or fails the Jasmine tests. 

### RSS Feeds
The first test suite is RSS Feeds which contains the RSS feed definitions and declares the allFeeds variable. The first test, `It has all feeds defined` makes sure that the allFeeds variable is declared and has a value greater than 0. We run this test to make sure that allFeeds has feeds to push into the document. The second test `it has a url defined` check to make sure that the obeject with the url and name in the allFeeds array has a url that is defined and longer than 0. Additionally, I have added a test to make sure that the url contains http. The last test in the RSS Feeds suite is the `it has a name defined`. This checks to make sure that the object with the url and name has a name defined this time and the length of the name is greater than zero. 

### The Menu 
On the top left of the page, there is a navigational menu that opens and closes on click. This test suite's goal is to test the menu's functionality.  The first test in this suite `has the side menu element hidden by default` which tests to make sure that when the page is loaded, the side navigational menu is automatically hidden. The second test in this suite is `has a menu that hides and unhides while being clicked` which checks to see that the menu-hidden class is applied and removed to the menu when it is toggled on and off. 

### Async Initial Entries
The third test suite is Async Initial Entries which performs async tests to check the feed content. Because the loadFeed function runs asynchronously, we must initialize Jasmine's beforEeach to deal with this function. Once this is done, then jasmine will run the next `should have a single entry element within the feed container` that makes sure that the feed class has at least one entry class. 

### Async New Feed Selection 
The fourth and final test suite is the Async new Feed Selection test which preforms another async test to check to make sure that the first feed content is not the same as the next feed's content. This test also has a beforeEach which sets the value of the previousFeed. Then after this function is completed, then it will check the new feed to see if the new feed differes from the old one. if they're different, the test passes. 

## Sources
All of the starting material, guidelines and rubric were provided by Udacity. This project utilized the Jasmine](http://jasmine.github.io/) library. 
