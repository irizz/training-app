export const ConsoleMethods = () => {
  const element = document.getElementById("consoleOutput");

  const add = something => {
    const node = document.createElement("div");
    node.innerHTML = "<p>" + something + "</p>";
    element.appendChild(node);
  };

  const originalError = console.error;
  const originalLog = console.log;
  const originalWarning = console.warn;
  const originalInfo = console.info;
  const originalClear = console.clear;

  console.error = function(error) {
    add(error.toString());
    originalError.apply(console, arguments);
  };
  console.log = function(...args) {
    args.forEach(add);
    originalLog.apply(console, args);
  };
  console.warn = function(...args) {
    args.forEach(add);
    originalWarning.apply(console, args);
  };
  console.info = function(...args) {
    args.forEach(add);
    originalInfo.apply(console, args);
  };
  console.clear = function(...args) {
    element.innerHTML = "";
    originalClear.apply(console, args);
  };
};
