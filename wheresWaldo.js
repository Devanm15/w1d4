function findWaldo(arr, found) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === "Waldo") {
			found(i);
			// console.log(arr.indexOf(i)); // execute callback
		}
	}
}

function actionWhenFound(index) {
	console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
