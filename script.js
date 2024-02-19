const wrapper = document.getElementById('wrapper');
const burgerBtn = document.getElementById('burgerButton')
const burgerMenu = document.getElementById('mobileMenu')


const fetchProducts = async () => {
    const response = await fetch('https://65c09d47dc74300bce8c569d.mockapi.io/Products');
    const products = await response.json();

    products.sort((a, b) => a.price - b.price);

    products.forEach((product) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const title = document.createElement('h2');
        const img = document.createElement('img');
        const price = document.createElement('h4');

        const imgWrapper = document.createElement('div');
        const titlePriceWrapper = document.createElement('div');

        titlePriceWrapper.setAttribute('class', 'titlePriceWrapper');
        imgWrapper.setAttribute('class', 'imgwrapper');
        
        title.innerText = product.name;
        img.src = product.imgUrl;
        price.innerText = `${product.price} eur`;

        imgWrapper.append(img);
        titlePriceWrapper.append(title);
        titlePriceWrapper.append(price);

        card.append(imgWrapper);
        card.append(titlePriceWrapper);

        card.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = './productDetails.html';
        });

        wrapper.append(card);

    });
};

fetchProducts();

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('mobileMenuToggle')
})