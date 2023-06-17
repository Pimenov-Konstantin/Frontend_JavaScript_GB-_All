// Task 1
// <div class="block"></div>
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

console.log('Task 1');

const blockDiv = document.querySelector('.block');
const divOne = document.createElement('div');
divOne.className = 'item';
divOne.textContent = 'Элемент внутри';
divOne.style.color = 'blue';
divOne.style.border = '1px solid black';
divOne.style.backgroundColor = 'gray';
divOne.style.padding = '16px';
divOne.setAttribute('class', 'item_1');
blockDiv.appendChild(divOne);

// Task 2
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

console.log('Task 2');

const paragraphText = document.querySelector('.text');
console.log(paragraphText.previousElementSibling);
console.log(paragraphText.parentElement);
console.log(paragraphText.parentElement.previousElementSibling);
console.log(paragraphText.parentElement.parentElement);

// Task 3
// <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h3 class="subtitle">Lorem, ipsum dolor.</h3>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h3  и вывести в консоль всех его родителей

console.log('Task 3');

let result = document.querySelector('h2');
while (result.parentNode) {
    console.log(result)
    result = result.parentNode;
}

// Task 4
// <form action="#">
//   <input type="text">
//   <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

console.log('Task 4');

const findButton = document.querySelector('.btn');
const findInput = document.querySelector('.inputText');
const findForm = document.querySelector('form');
findForm.addEventListener('submit', function(e) {
    e.preventDefault(); // останови отправку формы
    if (findInput.value === '') {
        const createH4 = document.createElement('h4');
        createH4.textContent = 'Введите текст в поле ввода';
        findForm.append(createH4);
        findInput.style.borderColor = 'red';
    }
});

// Task 5
// Дан тег <div class="next"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

console.log('Task 5');