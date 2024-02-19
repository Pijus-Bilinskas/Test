const wrapper = document.getElementById('wrapper');
const burgerBtn = document.getElementById('burgerButton')
const burgerMenu = document.getElementById('mobileMenu')

const product = JSON.parse(localStorage.getItem('selectedProduct'));
console.log(product);

const card = document.createElement('div');
const title = document.createElement('h2');
const img = document.createElement('img');
const price = document.createElement('h4');
const discription = document.createElement('p');
const productLocation = document.createElement('h5');
const imgWrapper = document.createElement('div');
const productDetails = document.createElement('div');
const titlePriceLocationWrapper = document.createElement('div');
const discriptionWrapper = document.createElement('div');
const titleLocationWrapper = document.createElement('div');
const priceWrapper = document.createElement('div');

const deleteButton = document.createElement('button');
deleteButton.innerText = 'Delete Product';

card.setAttribute('class', 'card');
deleteButton.setAttribute('class', 'deleteButton')
productDetails.setAttribute('class', 'productDetails');
imgWrapper.setAttribute('class', 'imgwrapper');
titlePriceLocationWrapper.setAttribute('class', 'titlePriceLocationWrapper');
discriptionWrapper.setAttribute('class', 'discriptionWrapper');
titleLocationWrapper.setAttribute('class', 'titleLocationWrapper');
priceWrapper.setAttribute('class', 'priceWrapper');

title.innerText = product.name;
img.src = product.imgUrl;
price.innerText = `${product.price} eur`;
discription.innerText = product.discription;
productLocation.innerText = product.location;

imgWrapper.append(img);
discriptionWrapper.append(deleteButton);
productDetails.append(titlePriceLocationWrapper);
productDetails.append(discriptionWrapper);
titlePriceLocationWrapper.append(titleLocationWrapper);
titlePriceLocationWrapper.append(priceWrapper);
titleLocationWrapper.append(title);
titleLocationWrapper.append(productLocation);
priceWrapper.append(price);
discriptionWrapper.append(discription);


card.append(imgWrapper);
card.append(productDetails);

wrapper.append(card);

deleteButton.addEventListener('click', async () => {
    try {
        const response = await fetch(
            `https://65c09d47dc74300bce8c569d.mockapi.io/Products/${product.id}`,
            {
                method: 'DELETE',
            }
        );
        if (response.ok) {
            wrapper.removeChild(card);
            const successfullyRemovedCard = document.createElement('div');
            successfullyRemovedCard.setAttribute('class', 'successfullyRemovedCard');
            successfullyRemovedCard.innerText = 'Product deleted successfully';
            wrapper.append(successfullyRemovedCard);
            console.log('Product deleted successfully');
        } else {
            console.log('Failed to delete product');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
    }
});

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('mobileMenuToggle')
})