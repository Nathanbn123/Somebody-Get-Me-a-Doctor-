import $ from 'jquery';


export class Doctor {
  constructor() {
  }

  findDoc(){
    const that = this;
    let docName = $('.nameInput').val();
    let symptoms = $('.symptomsInput').val();
    console.log(docName)
    console.log(symptoms)
    const promise = new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=%22${symptoms}%22&location=45.512230%2C-122.658722%2C%2025&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {

      const body = JSON.parse(response);
      console.log(body)
      console.log(body.data)
      that.docArr = body.data;
    }, function(error) {
      console.log(error);
    });
  }

  grabData(input) {
   const myData = [input.profile.first_name, input.profile.last_name, input.practices.phones[0].number, ]
   console.log(myData);
   return myData;
  }


}
  // sortDocs(input) {
  //   input.forEach() {
  //
  //
  //   });
  //
  // }
