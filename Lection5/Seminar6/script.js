// Task 1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

window.addEventListener('load', function(e) {
    console.log('Страница загрузилась');
});

const buttonOneEl = document.querySelector('.buttonOne');
// если делать так то будет работать только последнее
buttonOneEl.onclick = function() {
        console.log('событие onclick');
    }
    // если делать так то будут работать все
buttonOneEl.addEventListener('click', function(e) {
    console.log('Событие addEventListener');
});

// Task 2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

const buttonTwoElAll = document.querySelectorAll('.buttonTwo');
buttonTwoElAll.forEach(element => {
    element.addEventListener('click', function(event) {
        const target = event.target;
        console.log(target);
    });
});

// Task 3
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// 1
const buttonTreeEl = document.createElement('button');
buttonTreeEl.textContent = 'Добавить заголовок';
document.body.append(buttonTreeEl);

// 2
const heading = document.createElement('h1');
heading.textContent = 'Новый заголовок';

function addHeading() {
    buttonTreeEl.insertAdjacentElement('afterend', heading);
}
buttonTreeEl.addEventListener('click', addHeading);

// 3
const buttonTreeDeleteEl = document.querySelector('button');
buttonTreeDeleteEl.textContent = 'Удалить заголовок';
document.body.append(buttonTreeDeleteEl);
buttonTreeDeleteEl.addEventListener('click', function() {
    heading.remove();
});

// 4
const buttonTreeMouseEl = document.querySelector('button');
buttonTreeMouseEl.textContent = 'Наведи на меня';
document.body.append(buttonTreeMouseEl);
buttonTreeMouseEl.addEventListener('mouseover', function(e) {
    console.log('вы навели на данную кнопку');
});
buttonTreeMouseEl.addEventListener('mouseleave', function(e) {
    console.log('Наведения на кнопку больше нет');
});

// Task 4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const ul = document.querySelector('ul');
const buttonNewEl = document.querySelector('.newElement');
const buttonRemoveEl = document.querySelector('.removeElement');
const buttonSetEl = document.querySelector('.setElement');

buttonNewEl.addEventListener('click', function(e) {
    const newLi = document.createElement('li');
    newLi.textContent = 'Новый элемент списка';
    newLi.classList.add('li');
    ul.appendChild(newLi);
});

buttonRemoveEl.addEventListener('click', function(e) {
    ul.removeChild(ul.firstElementChild);
});

buttonSetEl.addEventListener('click', function(e) {
    buttonSetEl.classList.add('click');
    console.log(buttonSetEl);
});