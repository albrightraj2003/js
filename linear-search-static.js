const prompt = require("prompt-sync")();
var element = new Array (4, 7, 1, 24, 7, 3);
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
