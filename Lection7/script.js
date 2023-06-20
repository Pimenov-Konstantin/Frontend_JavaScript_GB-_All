// Task 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const checkbox = document.querySelector('#agree');
// const submitButton = document.querySelector('#submit');
// const body = document.querySelector('body');

// submitButton.addEventListener('click', function() {
//     if (!checkbox.checked) {
//         const error = document.createElement('div');
//         error.textContent = 'Необходимо согласиться';
//         error.style.color = 'red';
//         checkbox.parentNode.appendChild(error)
//     } else {
//         const done = document.createElement('div');
//         done.textContent = 'Отлично';
//         done.style.color = 'green';
//         checkbox.parentNode.appendChild(done)
//     }
// })

// Task 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const teaButton = document.querySelector('input[value="tea"]');
// const coffeeButton = document.querySelector('input[value="coffee"]');
// const submitButton = document.querySelector('#submit');

// submitButton.addEventListener('click', function() {
//     if (teaButton.checked) {
//         alert('Чай закончился');
//     } else if (coffeeButton.checked) {
//         alert('Кофе закончился');
//     }
// })

// Task 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const passwordField = document.querySelector('#password-field');
// const submitButton = document.querySelector('#submit-button');
// const message = document.querySelector('#message');

// submitButton.addEventListener('click', () => {
//     if (passwordField.value === 'пароль') {
//         // message.style.color = 'green';
//         // message.textContent = 'Пароль верный';
//         passwordField.style.borderColor = 'green';
//         passwordField.style.borderWidth = '2px';

//         passwordField.setCustomValidity('Пароль верный');
//         passwordField.reportValidity()
//     } else {
//         // message.style.color = 'red';
//         // message.textContent = 'Пароль неверный';
//         passwordField.style.borderColor = 'red';
//         passwordField.style.borderWidth = '2px';

//         passwordField.setCustomValidity('Пароль неверный');
//         passwordField.reportValidity()
//     }
// })

// Task 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const changeHeader = () => {
    const input = document.querySelector('#input');
    const header = document.querySelector('#header');
    header.innerText = input.value;
}

const input = document.querySelector('#input');
input.addEventListener('input', changeHeader);