import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import $ from 'jquery';
import {Doctor} from "./backEnd.js";



$(document).ready(function() {
  $('.helpMe').submit(function(event) {
  event.preventDefault();
  let mahBoi = new Doctor;
  mahBoi.findDoc();
  setTimeout(function() {
  let doctors = mahBoi.docArr;
  mahBoi.doctorCheck(doctors);
  let doctorInfo = mahBoi.grabData(doctors);
  console.log(doctorInfo)
  doctorInfo.forEach(function(element){
  $('.output-area').append('<p> First Name :' + element[0] + '</p>' + '<p> Last Name :' + element[1] + '</p>' + '<p> Address :' + element[2] + '</p>' + '<p> Phone Nuber :' + element[3] + '</p>')
});


  // let finalData = mahBoi.seperate(doctorInfo);
  // console.log(finalData);
}, 1000);
  });
});






//
// each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
