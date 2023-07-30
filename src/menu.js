function createMenu() {
    let pageContent = document.createElement('div');
    pageContent.classList.add('temporary-content');
    pageContent.innerHTML = `
    <div class="flex menu__text--wrapper">
                <h1 class="menu__text">Menu</h1>
            </div>

            <div class="menu__wrapper">
                <div class="menu__item menu__item--1">


                    <div class="img__container">
                        <img src="./img/50-discount-lechon.jpg" alt="50% discount baboy">
                        <div class="overlay">
                            <h2 class="price">P99</h2>
                        </div>
                    </div>

                    
                    <div class="name-desc-wrapper">
                        <h3 class="menu__item--name">Discounted Lechon</h3>
                        <p class="menu__item--description">Best seller!</p>
                    </div>
                </div>

                <div class="menu__item menu__item--2">

                    <div class="img__container">

                        <img src="./img/lechon-mamoy.jpg" alt="50% discount baboy">
                        <div class="overlay">
                            <h2 class="price">P299</h2>

                        </div>

                    </div>

                    <h3 class="menu__item--name">Lechon Mamoy</h3>

                </div>

                <div class="menu__item menu__item--3">

                    <div class="img__container">

                        <img src="./img/shiny-lechon.png" alt="50% discount baboy">
                        <div class="overlay">
                            <h2 class="price">P349</h2>

                        </div>

                    </div>

                    <h3 class="menu__item--name">Shining Shimmering Lechon</h3>

                </div>
            </div>`;


    document.querySelector('#content').appendChild(pageContent);
}

export default createMenu;