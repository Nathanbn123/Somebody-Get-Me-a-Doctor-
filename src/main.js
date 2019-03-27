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
  // console.log(mahBoi.docArr);
  let doctors = mahBoi.docArr;
  // console.log(doctors);
  mahBoi.doctorCheck(doctors);
  let doctorInfo = mahBoi.grabData(doctors);
  console.log(doctorInfo)
  doctorInfo.forEach(function(element){
  $('.output-area').append('<p>' + element + '</p>')
});


  // let finalData = mahBoi.seperate(doctorInfo);
  // console.log(finalData);
}, 1000);
  });
});






//
// each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
