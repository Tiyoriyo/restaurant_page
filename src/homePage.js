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

    const pageLinks = document.createElement('ul');
    
    for (let i = 0; i < 3; i++) {
        let link = document.createElement('li');

        switch (i) {
            case 0:
                link.innerHTML = 'Home';
                pageLinks.appendChild(link);
                break;

            case 1:
                link.innerHTML = 'Menu';
                pageLinks.appendChild(link);
                break;
            case 2:
                link.innerHTML = 'Contact';
                pageLinks.appendChild(link);
                break;       
        }
    }
    

    navbar.append(logo, pageLinks);

    mainContainer.append(navbar, pageContainer, footer);

    return mainContainer;
}