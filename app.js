// import functions and grab DOM elements
import { add, subtract, divide, multiply } from '../utils.js';
/////////////////////////////////////////////////////////////
const addinput1El = document.getElementById('addValue1');
const addinput2El = document.getElementById('addValue2');
const submitEl = document.getElementById('addSubmit');
const resultSpanEl = document.getElementById('addSpan');

submitEl.addEventListener('click', () => {
	const addFirstVal = addinput1El.value;
	const addSecondVal = addinput2El.value;

	const sum = add(addFirstVal, addSecondVal);

	resultSpanEl.textContent = sum;
});

////////////////////////////////////////////////////////////
const subtractInput1El = document.getElementById('subtractValue1');
const subtractInput2El = document.getElementById('subtractValue2');
const subtractSubmitEl = document.getElementById('subtractSubmit');
const subtractResultSpanEl = document.getElementById('subtractSpan');

subtractSubmitEl.addEventListener('click', () => {
	const firstVal = subtractInput1El.value;
	const secondVal = subtractInput2El.value;

	const sum = subtract(firstVal, secondVal);

	subtractResultSpanEl.textContent = sum;
});
///////////////////////////////////////////////////////////////
const divideInput1El = document.getElementById('divideValue1');
const divideInput2El = document.getElementById('divideValue2');
const divideSubmitEl = document.getElementById('divideSubmit');
const divideResultSpanEl = document.getElementById('divideSpan');

divideSubmitEl.addEventListener('click', () => {
	const firstVal = divideInput1El.value;
	const secondVal = divideInput2El.value;

	const sum = divide(firstVal, secondVal);

	divideResultSpanEl.textContent = sum;
});

///////////////////////////////////////////////////////////////
const multiplyInput1El = document.getElementById('multiplyValue1');
const multiplyInput2El = document.getElementById('multiplyValue2');
const multiplySubmitEl = document.getElementById('multiplySubmit');
const multiplyResultSpanEl = document.getElementById('multiplySpan');

multiplySubmitEl.addEventListener('click', () => {
	const firstVal = multiplyInput1El.value;
	const secondVal = multiplyInput2El.value;

	const sum = multiply(firstVal, secondVal);

	multiplyResultSpanEl.textContent = sum;
});
