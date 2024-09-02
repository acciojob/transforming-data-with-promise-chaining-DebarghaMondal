// JavaScript code in script.js

document.getElementById("btn").addEventListener("click", function () {
  // Get the input value
  const inputValue = Number(document.getElementById("ip").value);
  
  // Create the first promise that resolves after 2 seconds with the input number
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    .then((finalResult) => {
      document.getElementById("output").textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      document.getElementById("output").textContent = `Error: ${error}`;
    });
});
