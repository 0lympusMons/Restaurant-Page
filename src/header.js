function createHeader(){
    let pageContent = document.querySelector('#content');

    let headers = document.createElement('header');
    
    let nav = document.createElement('nav');
    
    let logo = document.createElement('h3');

    let buttonWrapper = document.createElement('div');
    
    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let aboutButton = document.createElement('button');

    logo.innerText = "Lechon sa Lacion";

    homeButton.innerText = "Home";
    menuButton.innerText = "Menu";
    aboutButton.innerText = "About";

    nav.classList.add('flex');
    buttonWrapper.classList.add('flex', 'nav__buttons');
    
    pageContent.appendChild(headers);
    headers.appendChild(nav);
    nav.appendChild(logo);
    nav.appendChild(buttonWrapper);
    buttonWrapper.append(homeButton, menuButton, aboutButton);

    
}

export default createHeader;

