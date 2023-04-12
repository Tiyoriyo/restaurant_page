import Logo from './gazelleLogo.png'

export default function render() {
    
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    const navbar = document.createElement('nav');
    const pageContainer = document.createElement('div');
    const footer = document.createElement('footer');

    navbar.classList.add('navbar');
    pageContainer.classList.add('pageContainer');
    footer.classList.add('footer');


    const logo = new Image();
    logo.src = Logo;

    

    navbar.append(logo);

    mainContainer.append(navbar, pageContainer, footer);

    return mainContainer;
}