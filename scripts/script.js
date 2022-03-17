// objects

const about = [
    {
        id: 1,
        lang: 'en',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo a sed nesciunt labore repellendus nulla repellat culpa veniam dignissimos, incidunt tenetur eveniet quibusdam laborum aperiam sit assumenda. Officia, praesentium totam.'
    },
    {
        id: 2,
        lang: 'pt',
        text: 'A Inês e o Miguel formam uma equipa de arquitectos. Nasceram em Lisboa. Estudaram em Itália no Politecnico di Milano. São Mestres em Arquitectura pela Faculdade de Arquitectura da Universidade de Lisboa. Desenvolvem a sua prática em ateliers. Acreditam na indispensabilidade da Arquitectura.'
    }
];

// booleans
let isNameSwitched = false;

// buttons
const plusIcon = document.querySelector('#first-plus-btn img');
const secondPlusIcon = document.querySelector('#second-plus-btn');
const secondPlusIconImg = secondPlusIcon.querySelector('img');
const arrowIcon = document.getElementById('form-submit');

// nav bar
const ul = document.querySelector('.list-wrapper');
const nav1 = document.querySelector('.nav-names li:first-child');
const nav1Sub = document.createElement('li');
const nav2 = document.querySelector('.nav-names li:nth-child(2)');
const nav2Sub = document.createElement('li');
const nav3 = document.querySelector('.nav-names li:nth-child(3)');
const nav3Sub = document.createElement('li');
const nameHer = document.querySelector('.name-her');

// text
const aboutText = document.querySelector('.about-text');
const aboutParagraph = aboutText.querySelector('p');
const btnEn = document.getElementById('btn-en');
const btnPt = document.getElementById('btn-pt');

// icons
const plusOrange = 'images/icons-plus-orange.png';
const plusBlack = 'images/icons-plus.png';
const arrowOrange = 'url(images/icons-arrow-orange.png)';
const arrowBlack = 'url(images/icons-arrow.png)';

// names
const her = document.getElementById('btn-her');
const him = document.getElementById('btn-him');

// form
const form = document.querySelector('.form-container');
const sendForm = document.getElementById('form-wrapper');
const contactName = document.getElementById('contact-name');
const emailAddress = document.getElementById('email-address');
const messageBody = document.getElementById('message-body');
const errorMessage = document.getElementById('error-message');

const errorContactName = document.querySelector('.form-container div:nth-child(2)');
const errorEmailAddress = document.querySelector('.form-container div:nth-child(4)');
const errorMessageBody = document.querySelector('.form-container div:nth-child(6)');


// functions

function removeClass(object, property){
    object.classList.remove(property);
};


function addClass(object, property){
    object.classList.add(property);
};


function replaceNavName(newItem, oldItem, text, aClass){
    newItem.textContent = text;
    ul.replaceChild(newItem, oldItem);
    newItem.classList.add(aClass);
};


// switch names

function switchNames(){
    if(!isNameSwitched){
        isNameSwitched = true;
        her.textContent = 'Miguel';
        him.textContent = 'e Inês';
            
    } else{
        isNameSwitched = false;
        her.textContent = 'Inês';
        him.textContent = 'e Miguel';
    }
};



// first button

plusIcon.addEventListener('mouseover', () => {
    removeClass(nav1, 'hide');
    addClass(nav1, 'orange');
    plusIcon.src = plusOrange;
});


plusIcon.addEventListener('mouseout', () => {
    addClass(nav1, 'hide');
    removeClass(nav1, 'orange');
    plusIcon.src = plusBlack;
});


plusIcon.addEventListener('click', () => {
    addClass(nav1, 'stroke');
    addClass(plusIcon, 'hide');
    removeClass(aboutText, 'hide');
    removeClass(secondPlusIcon, 'hide');

    // remove the old about and create a new one to replace it
    replaceNavName(nav1Sub, nav1, 'about', 'stroke'); 
});



// second button

secondPlusIcon.addEventListener('mouseover', () => {
    addClass(nav1Sub, 'hide');
    removeClass(nav2, 'hide');
    addClass(nav2, 'orange');
    secondPlusIconImg.src = plusOrange;
});

secondPlusIcon.addEventListener('mouseout', () => {
    addClass(nav2, 'hide');
    removeClass(nav1Sub, 'hide');
    secondPlusIconImg.src = plusBlack;
});

secondPlusIcon.addEventListener('click', () => {
    nav1Sub.textContent = '';
    addClass(secondPlusIcon, 'hide');
    replaceNavName(nav2Sub, nav2, 'thank you,', 'stroke');
    removeClass(arrowIcon, 'hide');
    removeClass(form, 'hide');
});

// send form button

arrowIcon.addEventListener('mouseover', () => {
    addClass(nav2Sub, 'hide');
    removeClass(nav3, 'hide');
    addClass(nav3, 'orange');
    arrowIcon.style.backgroundImage = arrowOrange;
});

arrowIcon.addEventListener('mouseout', () => {
    addClass(nav3, 'hide')
    removeClass(nav2Sub, 'hide');
    arrowIcon.style.backgroundImage = arrowBlack;
});


// switch names

her.addEventListener('click', () => {
    switchNames();
});

him.addEventListener('click', () => {
    switchNames();
});

// switch languages

btnEn.addEventListener('click', () => {
    aboutParagraph.textContent = about[0].text;
    addClass(btnEn, 'lang-bold');
    removeClass(btnPt, 'lang-bold');
});


btnPt.addEventListener('click', () => {
    aboutParagraph.textContent = about[1].text;
    removeClass(btnEn, 'lang-bold');
    addClass(btnPt, 'lang-bold');
});



// checks for valid email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// set a time for warning

function warningErrorColor(element, className){
    addClass(element, className);
    setTimeout(() => {
        removeClass(element, className);
    }, 3000);
};

function warningErrorMessage(messageContent){
    errorMessage.textContent = messageContent;
    setTimeout(() => {
        errorMessage.textContent = '';
    }, 3000); 
}

// form error messages
sendForm.addEventListener('submit', (e) => {

    let messages = [];

    // error message for name
    if(contactName.value === '' || contactName.value == null ){
        messages.push('Name required ');
        warningErrorColor(errorContactName, 'error-message-color');
    }

    // error message for email
    if(emailAddress.value === '' || emailAddress.value == null){
        messages.push('Email cannot be empty ');
        warningErrorColor(errorEmailAddress, 'error-message-color');

    } else if(!isEmail(emailAddress.value)){
        messages.push('Enter a valid email');
        warningErrorColor(errorEmailAddress, 'error-message-color');
    }

    // error message for message body
    if(messageBody.value === '' || messageBody.value == null){
        messages.push('Message cannot be empty ');
        warningErrorColor(errorMessageBody, 'error-message-color');

    } else if(messageBody.value.length < 15){
        messages.push('Message must be longer ');
        warningErrorColor(errorMessageBody, 'error-message-color');
    }


    // writes error messages
    if(messages.length == 1){
        e.preventDefault();
        warningErrorMessage(messages[0]);

    } else if(messages.length > 1){
        e.preventDefault();
        warningErrorMessage(messages.join('& '));
    }

    contactName.value === '';
    emailAddress.value === '';
    messageBody.value === '';

});

