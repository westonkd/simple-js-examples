// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

// 1. Gets a superhero out of a database
function fetchData() {
  return new Promise((resolve) => {
    // Pretend this data was fetched from a database
    const data = '{ "name": "Batman" }';

    resolve(data);
  });
}

// 2. Parses the JSON string into an object
function parseData(dataString) {
  return new Promise((resolve) => {
    resolve(JSON.parse(dataString));
  });
}

// 3. Gets the "name" property from the
// JSON object
function getName(parsedData) {
  return new Promise((resolve) => {
    resolve(parsedData.name);
  });
}

// What advantages do you see here compared to callbackChain.js?
fetchData()
  .then(parseData)
  .then(getName)
  .then((name) => {
    console.log(name);
  });
