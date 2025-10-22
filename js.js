function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // এখানে callback ফাংশনটা execute হচ্ছে
}

function sayGoodbye() {
  console.log("Goodbye!");
}



// এখন greet ফাংশনে callback পাঠানো হচ্ছে
greet("Amin", sayGoodbye);


function getData(callback) {
  setTimeout(() => {
    const data = { name: "Amin", age: 21 };
    callback(data);
  }, 1000);
}

getData(function(result) {
  console.log("Data loaded:", result);
});
