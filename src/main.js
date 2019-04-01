import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
import {Doctor} from "./backEnd.js";



$(document).ready(function()  {
  $('.helpMe').submit(function(event) {
  event.preventDefault();
  let mahBoi = new Doctor;
  mahBoi.findDoc();
  setTimeout(function() {
  let doctors = mahBoi.docArr;
  mahBoi.doctorCheck(doctors);
  let doctorInfo = mahBoi.grabData(doctors);
  doctorInfo.forEach(function(element) {
    // this.acceptingCheck(element[5])
    // this.webSiteCheck(element[4])
  });

  // doctorInfo.acceptingCheck(element[5]);

  doctorInfo.forEach(function(element){
  $('.output-area').append('<p> First Name:' + ' ' + element[0] + '</p>' + '<p> Last Name:' + ' ' + element[1] + '</p>' + '<p> Address:' + ' ' + element[2] + '</p>' + '<p> Phone Nuber:' + ' ' + element[3] + '</p>' + '<p> WebSite:' + ' ' + element[4] + '</p>' + '<p> Accepting new patients?:' + ' ' + element[5] + '</p> <hr>')
});


  // let finalData = mahBoi.seperate(doctorInfo);
  // console.log(finalData);
}, 1000);
  });
});






//
// each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
