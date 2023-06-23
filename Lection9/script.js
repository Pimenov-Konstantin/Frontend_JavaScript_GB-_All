// Task 1
// const productData = {
//     name: 'название товара obj',
//     price: 80
// }

// const productNameLink = document.querySelector('.product__name');
// const productPrice = document.querySelector('.product__price');
// productNameLink.textContent = productData.name;
// productPrice.textContent = productData.price;

// Task 2

const productsData = [{
        src: 'img.png',
        alt: 'img obj data',
        name: 'название из obj data',
        link: 'product.html',
        desc: 'описание из obj data',
        price: 21000
    },
    {
        src: 'img2.png',
        alt: 'img obj data 2',
        name: 'название из obj data 2',
        link: 'product2.html',
        desc: 'описание из obj data 2',
        price: 11000
    }
]

const productBox = document.querySelector('.product-box');

productsData.forEach(productData => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.setAttribute('alt', productData.alt);
    productImg.src = productData.src;

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productLink = document.createElement('a');
    productLink.href = productData.link;
    productLink.textContent = productData.name;

    const productText = document.createElement('p');
    productText.classList.add('product__text');
    productText.textContent = productData.desc;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = productData.price;

    productContent.appendChild(productLink);
    productContent.appendChild(productText);
    productContent.appendChild(productPrice);
    productEl.appendChild(productImg);
    productEl.appendChild(productContent);
    productBox.appendChild(productEl);
});