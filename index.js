// Listen for form submit
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Keep track of the current item being replaced
let currentIndex = 0;

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    // Display error message if fields are empty
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Get the list items
    const items = document.querySelectorAll('.item');

    // Check if the current index is within bounds
    if (currentIndex < items.length) {
      // Replace the content of the current item with the new data
      items[currentIndex].textContent = `${nameInput.value}: ${emailInput.value}`;

      // Increment the current index
      currentIndex++;
    } else {
      // Display message that all items have been replaced
      msg.classList.add('success');
      msg.innerHTML = 'All items have been replaced';

      // Remove message after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    }

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
