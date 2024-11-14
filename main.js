const button = document.querySelector('button')
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // get all form fields
        let firstName = document.getElementById('first-name');
        let lastName = document.getElementById('last-name');
        let email = document.getElementById('email');
        let queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
        let message = document.getElementById('message');
        let consentChecked = document.getElementById('consent').checked;
        let popupText= document.getElementById('popup-text');

        // Error Message
        let firstNameError = document.getElementById('first-name-error');
        let lastNameError = document.getElementById('last-name-error');
        let emailError = document.getElementById('email-error');
        let queryTypeError = document.getElementById('queryTypeError');
        let messageError = document.getElementById('message-error');
        let consentError = document.getElementById('consent-error');

        // validation
        let formIsValid = true;
        // validate first name
        if (firstName.value == ''){
            firstNameError.innerHTML = 'This field is required';
            formIsValid= false;
        } else {
            firstNameError.textContent = '';
        }

        // Validate last name
        if (lastName.value == ''){
            lastNameError.textContent = 'This field is required';
            formIsValid= false;
        } else {
            lastNameError.textContent = '';
        }

        // validate email
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/;
        if (email.value === ''){
            emailError.textContent = 'Please enter a valid email';
            formIsValid= false;
        } else if(!emailPattern.test(email.value)){
            emailError.textContent= 'Please enter a valid email';
            formIsValid= false;
        }else{
            emailError.textContent= '';
        }

        // validate query type

        if(!queryTypeSelected) {
        queryTypeError.textContent= 'Please select a query type';
        formIsValid = false;
        
        } else {
        queryTypeError.textContent= '';
    }

        // validate message
        
    if (message.value === ''){
        messageError.textContent = 'This field is required';
        formIsValid= false;
    } else {
        messageError.textContent = '';
    }

    // validate consent checkbox
    if(!consentChecked){
        consentError.textContent = 'To submit this form, please consent to being contacted';
        formIsValid= false;
    } else {
        consentError.textContent= "";
    };
        // popup message
        if(formIsValid){
            popupText.classList.add('visible');
   setTimeout(() => {
    popupText.classList.remove('visible');
   },3000)
 };
   
});


