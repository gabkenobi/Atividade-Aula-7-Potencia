function pow(base, exp) {
	let res;

	if (base === 0 && exp <= 0) {
		res = undefined;
	} else if (exp < 0) {
		res = 1;

		for (let i = 0; i > exp; i -= 1) {
			res /= base;
		}
	} else {
		res = 1;

		for (let i = 0; i < exp; i += 1) {
			res *= base;
		}
	}

	return res;
}

function printPower(base, exp) {
	let out = document.getElementById("out");

	out.innerHTML += base + " elevado a " + exp + " é: " + pow(base, exp) + "<br/>";
}

printPower(2, 2);
printPower(123, 0);
printPower(0, 0);
printPower(0, 8);
printPower(0, -5)