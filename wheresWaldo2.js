function findWaldo(arr, found) {
	var i = 0;
	arr.forEach(function action(arr) {
		if (arr === "Waldo") {
			found(i);
			// execute callback
		}
		i = i + 1;
	});
}

function actionWhenFound(index) {
	console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
