// let link = btn.getElementByTagName

// use javascript to reach out for the data stored in data-storing format (JSON, HML or HTML partial)

/*
// syntax
let prms = fetch(url-of-the-data-location)
*/




// let prms = fetch(url);

// prms
//   .then(function (response) {
//     // make sure the data is a available:
//     if (response.statusText === "OK") {
//       return response.text();
//     }

//     // handle the error
//     throw new Error(response.statusText);
//   })
//   .then(function (data) {
//     // create your html here using the data
//     // console.log(data);
//     dc.innerHTML = data;
//   })
//   .catch(function (err) {
//     // console.log(err);
//     er.innerHTML = err;
//   });






// access all 3 buttons

// create event-handler that will run when a button is clicked

// use event object to get the reference to the current event-target-element 

// using the dataset property of event-trarget-object extract the current url

// Finally, reassign the variable url with the value extracted from dataset property

// close function

// get the reference to your html element
let dc = document.getElementById("dynamic-content");
let er = document.getElementById("error");
let url = "./partials/partial-1.html";


let button = document.querySelectorAll('button');


function pageSelector(e) {
  e.preventDefault();
  url = e.target.dataset.id;
  loadData(url);
}

// function pageSelector(e) {
//   e.preventDefault();
//   let clickedButton = e.target;
//   let finalUrl = clickedButton.dataset.url;
//   url = finalUrl;
//   loadData();
// }

function loadData(url) {
  // this will display the content 
  fetch(url)
    .then(function (response) {
      if (response.statusText === "OK") {
        return response.text();
      }

      throw new Error(response.statusText);
    })
    .then(function (data) {
      // create your html here using the data
      console.log(data);
      dc.innerHTML = data;
    })
    .catch(function (err) {
      // console.log(err);
      er.innerHTML = err;
    })
};

loadData(url);

console.log(button);

// register your buttons for click event
// for ( let btn of button) {
button[0].addEventListener('click', pageSelector);
button[1].addEventListener('click', pageSelector);
// }