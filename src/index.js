/* global document, axios, _ */
/* eslint-disable no-console */

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML ='Hello '+' webpack';

  return element;
}

document.body.appendChild(component());

let requestUrl = 'https://registry.npmjs.org/JQ';
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
// requestUrl = `${corsProxy}${requestUrl}`;

axios(requestUrl)
  .then((res) => console.log(res.data));

// axios('/api/JQ')
//   .then((res) => console.log(res.data));
