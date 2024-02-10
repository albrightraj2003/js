const prompt = require("prompt-sync")();
var element = new Array;
var r = parseInt(prompt("Enter a range of elements: "));
for (var i = 0; i < r; i++) {
    element[i] = prompt();
}
linear_search(element);
function linear_search(element) {
    var count = 0;
    var num = parseInt(prompt("Enter the element to find: "));
    for (var i = 0; i < element.length; i++) {
        if (element[i] == num) {
            count++;
            console.log(`Element found at position ${i + 1}`);
            break;
        }
    }
    if (count == 0) {
        console.log("Element not found");
    }
}
