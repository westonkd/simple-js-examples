// 1. Gets a superhero out of a database
function fetchData(callback) {
  // Pretend this data was fetched
  // from a database
  const data = '{ "name": "Batman" }';

  callback(data);
}

// 2. Parses the JSON string into an object
function parseData(dataString, callback) {
  callback(JSON.parse(dataString));
}

// 3. Gets the "name" property from the
// JSON object
function getName(parsedData, callback) {
  callback(parsedData.name);
}

// Execution begins here
fetchData((rawData) => {
  parseData(rawData, (parsedData) => {
    getName(parsedData, (name) => {
      console.log(name);
    });
  });
});
