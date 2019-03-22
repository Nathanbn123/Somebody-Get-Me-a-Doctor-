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

  });
});
