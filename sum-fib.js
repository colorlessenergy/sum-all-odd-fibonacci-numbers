function sumFibs(num) {
	let arrOfFib = [];
	arrOfFib[0] = 1;
	arrOfFib[1] = 1;
	let sumOfAllOddFibSeq = 0;
	let numbersUsed = [];

	for (let i = 2; i < num; i++) {
		arrOfFib[i] = arrOfFib[i-2] + arrOfFib[i-1];
	}

	for (let i = 0; i < arrOfFib.length; i++) {
		// check if number is odd and smaller then the number given
		if (arrOfFib[i] % 2 !== 0 && arrOfFib[i] <= num) {
			// add all the odd and smaller numbers into a variable
			numbersUsed.push(arrOfFib[i]);
			sumOfAllOddFibSeq += arrOfFib[i];
		}
	}

	return [sumOfAllOddFibSeq, numbersUsed];
}

sumFibs(4);