import heroImg from './img/homepage-crackers.png';

function createHome(){
    let pageContent = document.querySelector('#content');
    let contentIntro = document.createElement('div');
    let introTextWrapper = document.createElement('div');
    let introLogo = document.createElement('h3');
    let introLogoDesc = document.createElement('h3');

    let img = new Image();
    img.src = heroImg;

    introLogo.innerText = 'Lechon sa Lacion';
    introLogoDesc.innerHTML = '<span class="black_bg">No. 1 Best (Dili mani lechon ang pic)</span>';

    contentIntro.classList.add('content__intro', 'flex', 'temporary-content');
    introTextWrapper.classList.add('flex-column');
    introLogo.classList.add('intro--logo');
    introLogoDesc.classList.add('numberOneBest');
    
    contentIntro.append(img, introTextWrapper);
    introTextWrapper.append(introLogo, introLogoDesc);
    pageContent.appendChild(contentIntro);


}

export default createHome;