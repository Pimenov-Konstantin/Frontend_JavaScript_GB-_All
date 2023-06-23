const productsData = [{
        src: 'https://gbcdn.mrgcdn.ru/uploads/avatar/3661674/attachment/thumb-686b2939978ebcd6c720089ea6cbd6e9.jpg',
        alt: 'Константин Пименов',
        name: 'Константин Пименов',
        link: 'kostya.html',
        desc: 'Первопроходец Первой в России пешеходной тропы "Путь Ермака" Пермь-Омск 1612 км пешком.',
        linksInfo: 'Полезная ссылка'
    },
    {
        src: 'https://gbcdn.mrgcdn.ru/uploads/avatar/2432634/attachment/thumb-f3bc8bc5c9e67b2130035cfffee79547.jpg',
        alt: 'Алексей Кадочников',
        name: 'Алексей Кадочников',
        link: 'alex.html',
        desc: 'Выпускник Московского Института электронной техники, факультет микроприборов и технической кибернетики, направление – вычислительные машины, комплексы, системы и сети.',
        linksInfo: 'Полезная ссылка'
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

    const productTitle = document.createElement('h1');
    productTitle.textContent = productData.name;

    const productText = document.createElement('p');
    productText.classList.add('product__text');
    productText.textContent = productData.desc;

    const productLink = document.createElement('a');
    productLink.href = productData.link;
    productLink.textContent = productData.linksInfo;

    productContent.appendChild(productTitle);
    productContent.appendChild(productLink);
    productContent.appendChild(productText);
    productEl.appendChild(productImg);
    productEl.appendChild(productContent);
    productBox.appendChild(productEl);
});