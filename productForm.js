const button = document.getElementById('button');
const burgerBtn = document.getElementById('burgerButton')
const burgerMenu = document.getElementById('mobileMenu')


button.addEventListener('click', async () => {
    const productName = document.getElementById('name').value;
    const productPrice = document.getElementById('price').value;
    const productImgUrl = document.getElementById('imgUrl').value;
    const productLocation = document.getElementById('location').value;
    const productDiscription = document.getElementById('discription').value;
    
    const successMessage = document.getElementById('succesMessage');
    const errorMessage = document.getElementById('errorMessage');


    const nameRegex = /[a-zA-Z]+/;
    const priceRegex = /^(0|[1-9]\d*)$/;
    const productLocationRegex = /^[A-Za-z]+$/;
    const imageUrlRegex = /\.(jpeg|jpg|gif|png|svg)$/i;

    const isValidName = nameRegex.test(productName);
    const isValidPrice = priceRegex.test(productPrice);
    const isValidLink = productLocationRegex.test(productLocation);
    const isValidImgUrl = imageUrlRegex.test(productImgUrl);

    if(isValidName && isValidPrice && isValidLink && isValidImgUrl && productDiscription){
        const productData = {
            name: productName,
            price: productPrice,
            imgUrl: productImgUrl,
            discription: productDiscription,
            location: productLocation,
        };
        const response = await fetch(
            "https://65c09d47dc74300bce8c569d.mockapi.io/Products",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(productData),
            }
          );
        const addedProduct = await response.json() 

        errorMessage.textContent = "";
        successMessage.textContent = "Product was added successfuly"; 
    } else {
        errorMessage.textContent = "Did not fill boxes correctly";
        successMessage.textContent = ""; 
    }
})

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('mobileMenuToggle')
})