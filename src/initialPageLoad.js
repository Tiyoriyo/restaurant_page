import Logo from './gazelleLogo.png'

export default function render() {

    function renderSections() {
        function renderHeaderContent() {
            const headerContent = document.createElement('div');
            headerContent.classList.add('headerContent');
            const navbar = document.createElement('nav');
            navbar.classList.add('navbar');
            const logo = new Image();
            logo.src = Logo;
        
            for (let i = 0; i < 3; i++) {
                let link = document.createElement('a');
                link.classList.add('link');
                
                switch (i) {
                    case 0:
                        link.innerHTML = 'Home';
                        navbar.appendChild(link);
                        break;
        
                    case 1:
                        link.innerHTML = 'Menu';
                        navbar.appendChild(link);
                        break;
                    case 2:
                        link.innerHTML = 'Contact';
                        navbar.appendChild(link);
                        break;       
                }
            }
        
            headerContent.append(logo, navbar);
            header.appendChild(headerContent);
        }

        function renderFooterContent() {
            const footerContent = document.createElement('div');
            footerContent.classList.add('footerContent');
            const footbar = document.createElement('nav');
            footbar.classList.add('footbar');
        
        
            for (let i = 0; i < 3; i++) {
                let link = document.createElement('a');
                link.classList.add('footLink');
                
                switch (i) {
                    case 0:
                        link.innerHTML = 'About Us';
                        footbar.appendChild(link);
                        break;
        
                    case 1:
                        link.innerHTML = 'Privacy & Terms';
                        footbar.appendChild(link);
                        break;
                    case 2:
                        link.innerHTML = 'Terms & Conditions';
                        footbar.appendChild(link);
                        break;       
                }
            }
        
            const signature = document.createElement('p');
            signature.innerHTML = 'Made by Vadim Kostrov - The Odin Project';
            signature.classList.add('sig');
        
            footerContent.append(footbar, signature);
            footer.append(footerContent);
        }

        const header = document.createElement('header');
        const pageContainer = document.createElement('div');
        const footer = document.createElement('footer');
        header.classList.add('header');
        pageContainer.classList.add('pageContainer');
        footer.classList.add('footer');

        mainContainer.append(header, pageContainer, footer);
        renderHeaderContent();
        renderFooterContent();
    }

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');    

    renderSections();

    return mainContainer;
}