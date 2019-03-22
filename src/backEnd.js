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

  doctorCheck(input) {
    if (input == []) {
      console.log("Sorry, there are no doctors in your area that meet your criteria.")
      // return "Sorry, there are no doctors in your area that meet your criteria."
    }
  }

  grabData(input) {
    var i;
    let doctorsArr = []
    for (i = 0; i < input.length; i++) {
      let info = [input[i].profile.first_name, input[i].profile.last_name, input[i].practices[0].visit_address.street, input[i].practices[0].phones[0].number,
      input[i].practices[0].website, input[i].practices[0].accepts_new_patients];
      doctorsArr.push(info);
    }
    return doctorsArr.map();
  }

}

// seperate(input) {
//   let finalDoctor
//   input.forEach(element => {
//   finalDoctor = (element[0] + element[1])
//   });
//  console.log(finalDoctor)
// }
// }




//   sortData() {
//     forEach(function(){
//     let info = [input.profile.first_name, input.profile.last_name, input.practices[0].visit_address.street, input.practices[0].phones[0],
//     input.practices[0].website, input.practices[0].accepts_new_patients];
//     console.log(info);
//     return info;
//   });
// }


  // sortDocs(input) {
  //   input.forEach() {
  //
  //
  //   });
  //
  // }
