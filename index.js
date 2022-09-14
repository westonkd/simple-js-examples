// When Node.js starts
// 1. it initializes the event loop
// 2. processes the provided input script which may make async API calls, schedule timers, or call process.nextTick()
// 3. then begins processing the event loop

// The following diagram shows a simplified overview of the event loop's order of operations.

//    ┌───────────────────────────┐
// ┌─>│           timers          │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │     pending callbacks I/O │
// │  └─────────────┬─────────────┘      ┌───────────────┐
// │  ┌─────────────┴─────────────┐      │   incoming:   │
// │  │           poll            │<─────┤  connections, │
// │  └─────────────┬─────────────┘      │   data, etc.  │
// │  ┌─────────────┴─────────────┐      └───────────────┘
// │  │           check           │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// └──┤      close callbacks      │
//    └───────────────────────────┘

// timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
// pending callbacks: executes I/O callbacks deferred to the next loop iteration.
// idle, prepare: only used internally.
// poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
// check: setImmediate() callbacks are invoked here.
// close callbacks: some close callbacks, e.g. socket.on('close', ...).

// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

function asyncExample() {
  console.log("Hello, world!");

  setTimeout(() => {
    console.log("My name is");
  }, 0);

  console.log("Brother Dransfield");
}

// What do you predict will be printed to the console?
asyncExample();
