import createFooter from "./footer";

function createAbout() {

    let pageContent = document.createElement('div');
    let contentWrapper = document.createElement('div');
    let deformedPigText = document.createElement('h1');
    let quote = document.createElement('q');

    pageContent.classList.add('temporary-content', 'flex-column', 'full-height-width');
    contentWrapper.classList.add('content__wrapper');
    deformedPigText.classList.add('deformed-pig');
    quote.classList.add('quote');

    document.querySelector('#content').appendChild(pageContent);
    pageContent.appendChild(contentWrapper);
    contentWrapper.append(deformedPigText, quote);

    deformedPigText.textContent = "Here in Lechon sa Lacion, we adhere to, what we call, the fundamental laws of profitting off of raising deformed pigs.";
    quote.textContent = "Grow pig. Beat pig. Cook pig. Sell pig. Profit.";

    pageContent.appendChild(createFooter());
}


export default createAbout;