# _Doctor Search_

#### _A full fledged Doctor search engine! 2/22/19_

#### By _**Nathan Nielson**_

## Description

_This application is a doctor search engine which will allow the user to search for specific doctors in their area!

## Planning

### Configuration and Dependencies
**All dependencies are defined in the package.json file**
_Full list of dependencies omitted for brevity._
*Jasmine
*Karma
*Jquery
*Webpack
*babel
*ESlint




### Specs

Specification | Input | Output
------------- | ----- | ------
Will return a list of doctors with the users desired name input. | John | John Johnson, John Bazinksi, John Kodingo, John John.
Will return a list of doctors depending on the users inputted symptoms. | pain, dizziness | Michael Afterton, Boris Hikoko, Michelle Yulino, Jessica Parkano.
Will return a message if there are no doctors in Portland that meet the users criteria. | John, I'm dying | "Sorry, there are no doctors in your area that meet your criteria."

### Integration


### UX/UI
* Create actual interface.
* Create functional inputs.
* Add radical space images?

### Polish
* integrate further functionality.






### Setup/Installation Requirements
* _Use your command terminal (gitbash if you're using a windows machine) to clone the latest commit from Github, using the url provided_
* _Go to the BetterDoctor website (https://developer.betterdoctor.com/) and create an account so that you may recieve your own API key._
* _Once the download is complete, use your terminal to 'cd' into the project folder_
* _In your terminal, type "touch .env"_
* _Open your new .env file then type "exports.apiKey =" and enter your API key after the "="_
* _Once inside, run 'npm install' in your terminal to install necessary plugins_
* _When the install is complete, enter 'npm run start' in your terminal to open the site in your browser!_
* _To view the code, press 'CTRL + C' to stop the auto update, run "atom ." in your terminal then navigate to the 'src' folder and open whatever you wish to view!_

### Known Bugs

_App currently does not function._

### Support and contact details
_If you encounter any bugs or issues not documented during your experience, please feel free to contact me at my email: nathans-email@email.com_

### Technologies used

_This application was created using HTML, CSS, Bootstrap, Javascript and Jquery_

### License

Copyright (c) 2019 **_Nathan Nielson, Epicodus_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
