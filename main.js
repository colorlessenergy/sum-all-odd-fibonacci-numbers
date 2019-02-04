let form = document.querySelector('form');

form.addEventListener('submit', recieveFibSeq);

function recieveFibSeq (event) {
  event.preventDefault();

  // user inputed number
  let number = form.number.value;

  // use the function that was made in another file 
  // to recieve the sequence smaller than that number
  // to recieve the sum of odd numbers smaller than that number
  let fibSeqAndSum = sumFibs(number);

  // split the array of fib sequence from sum
  let fibSum = fibSeqAndSum[0];
  let fibSeqArr = fibSeqAndSum[1];

  let listOfNumbersUl = document.querySelector('#listNumbersUsed');
  let sumOfNumbers = document.querySelector('#sumOfNumbers');

  listOfNumbersUl.textContent = '';

  let hiddenTitleForUl = document.querySelector('.hidden');

  hiddenTitleForUl.style.visibility = 'visible';
  fibSeqArr.forEach(function (num) {
    let li = document.createElement('li');
    li.textContent = num;
    listOfNumbersUl.appendChild(li);
  });

  sumOfNumbers.textContent = 'sum of all Odd Number in the fibonacci sequnce less than or equal to the number you entered ' + fibSum;
}