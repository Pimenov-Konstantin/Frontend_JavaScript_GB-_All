// 1
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

const divElement = document.querySelector('#block p:first-child');
const firstPara = document.querySelector('.www');
console.log(divElement);
console.log(firstPara);

// 2
// 1. Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// 2. Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// 1
const elemLink = document.querySelector('.link');
elemLink.textContent = 'link text js';
elemLink.href = 'https://developer.mozilla.org/ru/ ';

// 2
const elemPhoto = document.querySelector('.photo');
elemPhoto.src = 'https://gbcdn.mrgcdn.ru/uploads/avatar/2432634/attachment/thumb-f3bc8bc5c9e67b2130035cfffee79547.jpg';

// Смена при клике
elemPhoto.onclick = function() {
    if (elemPhoto.src === 'https://gbcdn.mrgcdn.ru/uploads/avatar/3661674/attachment/thumb-686b2939978ebcd6c720089ea6cbd6e9.jpg') {
        elemPhoto.src = 'https://gbcdn.mrgcdn.ru/uploads/avatar/2432634/attachment/thumb-f3bc8bc5c9e67b2130035cfffee79547.jpg'
    } else {
        elemPhoto.src = 'https://gbcdn.mrgcdn.ru/uploads/avatar/3661674/attachment/thumb-686b2939978ebcd6c720089ea6cbd6e9.jpg'
    }
}

// 3
// 1. Дан тег <div class="content"></div> 
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел 

// 1 находим div
const findDiv = document.querySelector('.content');
// 2 создаем элемент р
const pElem = document.createElement('p');
// 3 добавляем в р текст
pElem.textContent = 'Новый текстовый элемент';
// 4 добавлеме его же в div
findDiv.append(pElem);
console.log(findDiv);
// 5 удаляем добавленный узел
pElem.remove();


// 4
// 1. Создать элемент button, добавить в блок <div class="content"></div>
// 2. При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку.

const buttonUp = document.createElement('button');
const buttonDown = document.createElement('button');
const childP = document.createElement('p');
childP.textContent = 0;
const parentOne = document.querySelector('.contentOne');
parentOne.appendChild(buttonUp);
parentOne.appendChild(childP);
parentOne.appendChild(buttonDown);

buttonUp.onclick = function() {
    childP.textContent++;
}
buttonDown.onclick = function() {
    childP.textContent--;
}

// 5
// Дан тег <div class="contentTwo"></div> 
// 1. Создайте с помощью javascript новый элемент button
const contentElem = document.querySelector('.contentTwo');
const buttonElem = document.createElement('button');
contentElem.appendChild(buttonElem);
console.log(contentElem);
// 2. Добавьте текст для кнопки “Отправить”
buttonElem.textContent = 'Отправить';
// 3. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
buttonElem.onclick = function() {
        buttonElem.textContent = 'Текст отправлен';
    }
    // вторая кнопка
const buttonElem2 = document.createElement('button');
contentElem.appendChild(buttonElem2);
buttonElem2.textContent = 'Новый текст';
const pElement = document.createElement('p');

let flag = true;
buttonElem2.onclick = function() {
    if (flag) {
        contentElem.appendChild(pElement);
        pElement.textContent = 'lorem';
        flag = false;
    } else {
        pElement.remove();
        flag = true;
    }
}