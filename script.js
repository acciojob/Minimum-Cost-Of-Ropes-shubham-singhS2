// Get the input element, button element, and result div
const inputElement = document.getElementById('rope-lengths');
const submitButton = document.getElementById('submit-button');
const resultDiv = document.getElementById('result');

// Add click event listener to the submit button
submitButton.addEventListener('click', () => {
  // Get the input value and convert it to an array of integers
  const input = inputElement.value;
  const ropeLengths = input.split(',').map(Number);

  // Call the connectRopes function to get the minimum cost
  const minCost = connectRopes(ropeLengths);

  // Display the minimum cost in the result div
  resultDiv.innerText = `The minimum cost is ${minCost}`;
});

function connectRopes(arr) {
  // Create a min heap to store the ropes
  const heap = [];
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }
  // Use built-in heapify method to convert array to heap
  heap.heapify();

  // Keep connecting the two smallest ropes until only one rope is left
  let cost = 0;
  while (heap.length > 1) {
    const rope1 = heap.pop();
    const rope2 = heap.pop();
    const connectedRope = rope1 + rope2;
    cost += connectedRope;
    heap.push(connectedRope);
    heap.heapify(); // Reorder heap after adding new rope
  }

  return cost;
}
