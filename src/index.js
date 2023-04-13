import {default as initialPage} from './modules/initialPageLoad.js';
import {default as homeContent} from './modules/homeContent.js';
import {default as menuContent} from './modules/menuContent.js';
import {default as contactContent} from './modules/contact.js';
import './style.css';

const mainContainer = document.querySelector('#content');
mainContainer.appendChild(initialPage());
const contentContainer = document.querySelector('.pageContainer');
contentContainer.appendChild(homeContent());

const navBarLinks = document.querySelectorAll('.link');

function unActive() {

    navBarLinks.forEach((link, index) => { navBarLinks[index].className = 'link'});

    footBarLinks.forEach((link, index) => { footBarLinks[index].className = 'footLink'});

}

function logoHomeButton() {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(homeContent());
    unActive();
    navBarLinks[0].classList += ' active';
}


const logo = document.querySelector('.logo');
logo.addEventListener('click', logoHomeButton);

navBarLinks.forEach((link, index) => navBarLinks[index].addEventListener('click', (e) => {
    switch(index) {
        case 0:
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            contentContainer.appendChild(homeContent());
            break;
        case 1:
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            contentContainer.appendChild(menuContent());
            break;
        case 2:
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            contentContainer.appendChild(contactContent());
            break;
    };
}));

const footBarLinks = document.querySelectorAll('.footLink');

footBarLinks.forEach((link, index) => footBarLinks[index].addEventListener('click', (e) => {
    switch(index) {
        case 0: 
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            break;
        case 1:
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            break;
        case 2:
            unActive();
            e.target.classList += ' active';
            contentContainer.innerHTML = '';
            break;
    }
}));

