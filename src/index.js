import {default as initialPage} from './initialPageLoad.js';
import {default as homeContent} from './homeContent.js';
import './style.css';

const mainContainer = document.querySelector('#content');

mainContainer.appendChild(initialPage());

const contentContainer = document.querySelector('.pageContainer');

contentContainer.appendChild(homeContent());

