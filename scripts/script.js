
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
const arrowImg = document.getElementById('form-arrow');

// nav bar
const ul = document.querySelector('.list-wrapper');
const nav1 = document.querySelector('.nav-names li:first-child');
const nav2 = document.querySelector('.nav-names li:nth-child(2)');
const nav3 = document.querySelector('.nav-names li:nth-child(3)');
const nav4 = document.querySelector('.nav-names li:nth-child(4)');
const navSub = document.createElement('li');
const nameHer = document.querySelector('.name-her');

// text
const aboutText = document.querySelector('.about-text');
const aboutParagraph = aboutText.querySelector('p');
const btnEn = document.getElementById('btn-en');
const btnPt = document.getElementById('btn-pt');

// icons
const plusOrange = 'images/icons-plus-orange.png';
const plusBlack = 'images/icons-plus.png';
const arrowOrange = 'images/icons-arrow-orange.png';
const arrowBlack = 'images/icons-arrow.png';

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


// -------------------------------------------
// BASIC FUNCTIONS
// -------------------------------------------

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


// -------------------------------------------
// SWITCH NAMES
// -------------------------------------------

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

her.addEventListener('click', () => {
    switchNames();
});

him.addEventListener('click', () => {
    switchNames();
});



// -------------------------------------------
// FIRST ' + ' BUTTON
// -------------------------------------------

// 0 --> 700 = phone
// 700 --> 1120 = ipad
// > 1120 = desktop

let innerWidth = window.innerWidth;
const minDesktopWidth = 1050;
const minIpadWidth = 670;

function firstPlusIconClickRepeatedCode(){
    addClass(nav1, 'stroke');
    addClass(plusIcon, 'hide');
    removeClass(aboutText, 'hide');
    removeClass(secondPlusIcon, 'hide');
    replaceNavName(navSub, nav1, 'about', 'stroke'); 
}

if(innerWidth >= minDesktopWidth){
    // screen size DESKTOP
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
        firstPlusIconClickRepeatedCode();
    });

} else if (innerWidth <= minDesktopWidth && innerWidth >= minIpadWidth){
    // screen size IPAD
    plusIcon.addEventListener('click', () => {
        addClass(nameHer, 'name-her-below'); //the only difference to the desktop size
        firstPlusIconClickRepeatedCode();
    });
}
else{
    // screen size MOBILE
    plusIcon.addEventListener('click', () => {
        addClass(nameHer, 'name-her-below'); //the only difference to the desktop size
        addClass(aboutText, 'about-text-mobile');//the only difference to the desktop size
        firstPlusIconClickRepeatedCode();
    });
}


// -------------------------------------------
// SECOND ' + ' BUTTON
// -------------------------------------------

// 0 --> 700 = phone
// 700 --> 1120 = ipad
// > 1120 = desktop

function secondPlusIconClickRepeatedCode(){
    addClass(secondPlusIcon, 'hide');
    replaceNavName(navSub, nav2, 'contact', 'stroke');
    removeClass(arrowIcon, 'hide');
    removeClass(form, 'hide');
}

if(innerWidth >= minDesktopWidth){
    // screen size DESKTOP
    secondPlusIcon.addEventListener('mouseover', () => {
        addClass(navSub, 'hide');
        removeClass(nav2, 'hide');
        addClass(nav2, 'orange');
        secondPlusIconImg.src = plusOrange;
    });
    
    secondPlusIcon.addEventListener('mouseout', () => {
        addClass(nav2, 'hide');
        removeClass(navSub, 'hide');
        secondPlusIconImg.src = plusBlack;
    });
    
    secondPlusIcon.addEventListener('click', () => {
        secondPlusIconClickRepeatedCode();
    });

} else if(innerWidth <= minDesktopWidth && innerWidth >= minIpadWidth){
    // screen size IPAD
    secondPlusIcon.addEventListener('click', () => {
        secondPlusIconClickRepeatedCode();
    });
}
else{
    // screen size MOBILE
    secondPlusIcon.addEventListener('click', () => {
        secondPlusIconClickRepeatedCode();
        addClass(aboutText, 'hide');
    });
}



// -------------------------------------------
// SEND FORM BUTTON MOUSEOVER FOR DESKTOP
// -------------------------------------------

// > 1120 = desktop


if(innerWidth >= minDesktopWidth){
    // screen size DESKTOP
    arrowIcon.addEventListener('mouseover', () => {
        addClass(navSub, 'hide');
        removeClass(nav3, 'hide');
        addClass(nav3, 'orange');
        arrowImg.src = arrowOrange;
    });

    arrowIcon.addEventListener('mouseout', () => {
        addClass(nav3, 'hide')
        removeClass(navSub, 'hide');
        arrowImg.src = arrowBlack;
    });
}



// -------------------------------------------
// SWITCH LANGUAGES
// -------------------------------------------

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



// -------------------------------------------
// CHECKS FOR VALID EMAIL
// -------------------------------------------

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// -------------------------------------------
// SETS A TIMER FOR WARNING MESSAGE
// -------------------------------------------

function warningErrorColor(element, className){
    addClass(element, className);
    setTimeout(() => {
        removeClass(element, className);
    }, 3000);
};

function warningErrorMessage(messageContent){
    errorMessage.textContent = messageContent;
    errorMessage.style.backgroundColor = 'var(--orange)';
    setTimeout(() => {
        errorMessage.textContent = '';
        errorMessage.style.backgroundColor = 'transparent';
    }, 3000); 
}



// -------------------------------------------
// FORM VALIDATION
// -------------------------------------------


let isFormValid = false;

sendForm.addEventListener('submit', (e) => {

    let messages = [];

    // defines error message for name
    // IF checks if input is empty
    if(contactName.value === '' || contactName.value == null ){
        messages.push('Name required ');
        // warningErrorColor(errorContactName, 'error-message-color');
    }

    // defines error message for email
    // IF checks if input is empty
    if(emailAddress.value === '' || emailAddress.value == null){
        messages.push('Email cannot be empty ');
        // warningErrorColor(errorEmailAddress, 'error-message-color');

    // ELSE IF checks is input is a valid email
    } else if(!isEmail(emailAddress.value)){
        messages.push('Enter a valid email ');
        // warningErrorColor(errorEmailAddress, 'error-message-color');
    }

    // defines error message for message body
    // IF checks if input is empty
    if(messageBody.value === '' || messageBody.value == null){
        messages.push('Message cannot be empty ');
        // warningErrorColor(errorMessageBody, 'error-message-color');

    // ELSE IF checks is input has less than 15 char
    } else if(messageBody.value.length < 15){
        messages.push('Message must be longer ');
        // warningErrorColor(errorMessageBody, 'error-message-color');
    }


    // writes error messages
    if(messages.length == 1){
        e.preventDefault();
        isFormValid = false;
        warningErrorMessage(messages[0]);

        
    } else if(messages.length > 1){
        e.preventDefault();
        isFormValid = false;
        warningErrorMessage(messages.join('& '));

    } else{
        isFormValid = true;
    }

    // deletes not valid inputs
    if(errorMessageBody.classList.contains('error-message-color')){
        messageBody.value = '';
    } 
    
    if(errorContactName.classList.contains('error-message-color')){
        contactName.value = '';
    } 
    
    if(errorEmailAddress.classList.contains('error-message-color')){
        emailAddress.value = '';
    }

    // sends validated form
    if(isFormValid){
        form.remove();
        addClass(nav3, 'hide');
        removeClass(nav4, 'hide');
        addClass(nav4, 'stroke');  
    }
    
});


