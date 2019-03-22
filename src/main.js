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
  console.log(mahBoi.docArr);
  // mahBoi.grabData(doctors);

}, 2000);
  });
});






//
// each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
