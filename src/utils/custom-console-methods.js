/**
 * Custom console methods are used so that user 
 * could see console messages directly on the page
 */
export const replaceConsoleMethodsWithCustom = () => {
  const element = document.getElementById("sandbox-console-output");
  const add = message => {
    const node = document.createElement("div");
    node.innerHTML = "<p>" + message + "</p>";
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
