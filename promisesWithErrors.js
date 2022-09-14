// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

// 1. Gets a superhero out of a database
function fetchData() {
  return new Promise((resolve, reject) => {
    const data = "{}";

    // Pretend there was an error connecting to the
    // superhero database
    const error = "Error connecting to database!";

    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
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

fetchData()
  .then(parseData)
  .then(getName)
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.error("Oh no, there was an error:", error);
  })
  .finally(() => {
    console.log("All done!");
  });
