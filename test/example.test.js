// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, multiply, divide, subtract } from '../utils.js';

const test = QUnit.test;

//ADDITION TESTS:
test('add should take in 10 + -10 and return 0', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 0;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add(10, -10);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('add should take in "10" + 6 and return 16', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 16;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add('10', 6);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('add should take in 25 + 0 and return 25', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 25;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add(25, 0);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

//MULTIPLICATION TESTS:
test('multiply should take in 10 * -10 and return -100', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -100;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply(10, -10);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('multiply should take in 25 * 4 and return 100', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 100;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply(25, 4);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('multiply should take in "10" * 8 and return 80', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 80;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply('10', 8);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

//SUBTRACT TESTS:
test('subtract should take in 10 - -10 and return 20', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 20;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract(-10, 10);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('subtract should take in "25" - 4 and return 21', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 21;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract('25', 4);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('subtract should take in 12 - 16 and return -4', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -4;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract(12, 16);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
