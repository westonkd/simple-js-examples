// Callbacks are common in JS due to the nature of
// web back and front ends (A lot of I/O wait)
//
// A callback pattern is similar to asking someone "Please go to the store and get
// chocolate chips. When you get back, I'll make cookies."
//
// In this scenario, we have some asynchronous operation: going to the store. We also
// have an event that will occur once the async operation is complete: make cookies. This
// post-async operation is a callback.
//
// The above scenario could be written as JavaScript in the following way:
// function getChocolateChipsFromStore(callback) {
//   const chocolateChips = ['chip1', 'chip2', 'chip3']
//
//   callback(chocolateChips)
// }
//
// function makeCookies(chocolateChips) {
//   Make cookies...
// }
//
// getChocolateChipsFromStore(makeCookies)

function fetchData(callback) {
  // Pretend this data was fetched
  // from a database
  const data = "{ foo: 'bar' }";

  // We have the data, now pass it
  // to the callback
  callback(data);
}

const callback = (data) => {
  console.log(data);
};
fetchData(callback);
