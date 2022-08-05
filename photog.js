const formContact = document.querySelector('#form-contact');
const buttonSubmit = document.querySelector('#button-submit');
const inputEvent = document.querySelector('#event');

formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked!');
    console.log(e.target);
});

AOS.init();