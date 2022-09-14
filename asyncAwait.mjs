// 1. Gets a superhero out of a database
async function fetchData(callback) {
  // Pretend this data was fetched
  // from a database
  const data = '{ "name": "Batman" }';

  return data;
}

// 2. Parses the JSON string into an object
async function parseData(dataString, callback) {
  return JSON.parse(dataString);
}

// 3. Gets the "name" property from the
// JSON object
async function getName(parsedData, callback) {
  return parsedData.name;
}

try {
  const data = await fetchData();
  const parsedData = await parseData(data);
  const name = await getName(parsedData);

  console.log(name);
} catch (error) {
  console.error("Oh no! There was an error:", error);
}
