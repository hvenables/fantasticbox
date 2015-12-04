# Fantastic Box Co

#### Tools Used

Testing: Karma, Protractor  
Frameworks: Angularjs

#### Comments about build

Fantastic Box Co form was built as an AngularJS single page application as I felt the dynamic natural of angularjs would give the best user experience. And also allow me to update the form with angulars two way data binding.

This project was test driven using Karma for unit testing and then Protractor for feature testing.

I saved the product data as a local JSON file and called it through an Angular factory as I wanted to generate the HTML dynamically and it allows the option of moving it to an external API if required.

## How to build

All commands assume you are running this from terminal.

1. Clone this repo and open the containing folder
  * `git clone https://github.com/hvenables/fantasticbox.git`
2. Make sure you have node and bower: `node -v` and `bower -v`  
3. Run `bower install`  
4. Run `npm install`  
5. Run `http-server`  
6. Visit: [http://localhost:8080/ ](http://localhost:8080/ )  

### Testing

Run the following commands from terminal to run the tests

##### Karma (Unit Tests):  
1. `karma start test/unitTest/karma.conf.js`

##### Protractor (Feature Tests):
(these will require separate terminal windows)  
1. `webdriver-manager start`  
2. `http-server`  
3. `protractor test/e2e/conf.js`  
