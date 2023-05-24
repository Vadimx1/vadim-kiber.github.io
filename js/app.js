function hello() {
    document.getElementById('1').innerHTML = 'hello';
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function sambit() {
    var name = document.getElementById('name').value;
    var name = document.getElementById('phone').value;
    var name = document.getElementById('email').value;

    if (name == '') {
        document.getElementById('status').innerHTML = 'Заполните поле ФИО'
    } else if (email == '') {
        document.getElementById('status').innerHTML = 'Заполните поле e-mail'
    } else if (phone == '') {
        document.getElementById('status').innerHTML = 'Заполните поле телефон'
    } else {
        document.getElementById('status').innerHTML = `Регистрация прошла успешно. Ваши данные на сайте: ФИО - ${name} e-mail: ${email} телефон: ${phone}`;
    }
}


function set_body_color_red() {
    document.body.style.backgroundColor = 'red';
}

function set_body_color(color) {
    document.body.style.backgroundColor = color
}

function input_color() {
    var input_color = document.getElementById('color').value;

    set_body_color(input_color);
}

function set_font_size(id, size) {
    document.getElementById(id). style.fontSize = size;
}

function lampOn() {
    document.getElementById('lamp').src = 'images/lamp2.gif'

    document.body.style.backgroundColor = '#fff';
}



function lampOff() {
    document.getElementById('lamp').src = 'images/lamp1.gif'

    document.body.style.backgroundColor = '#000';

    document.getElementById('main').style.color = '#fff'
}


function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}

function createButton() {
    var btn = document.createElement('P');
    btn.innerHTML = 'Новый абзац';
    document.getElementById('buttonList').appendChild(btn);
}

// Создание объекта
var person = new Object();

// Добавление свойств со значениями
person.name = 'Вася'
person.surname = 'Пупкин'
person.age = '88'
person.weight = '50'
person.fullName = function() {
    return this.name + ' ' + this.surname;
}


function showPerson() {
    document.getElementById('person').innerHTML = person.fullName() + ':' + person.age;
}

// Создать объект auto

// Создать свойство и дать им значения
// brand - Audi
// model - A6
// year - 2020
// color - черный

// объявить функцию showAuto
// функция должна записывать содержимое абзаца #auto названия свойств с их значениями 


var avto = new Object(); 
avto.brand = 'Audi'
avto.model = 'A6'
avto.year = '2020'
avto.color = 'черный'

function showAvto() {
    document.getElementById('avto').innerHTML = 'Бренд: ' + avto.brand + '<br>' + 'Модель: ' + avto.model + '<br>' + 'Год: ' + avto.year + '<br>' + 'Цвет: ' + avto.color + '<br'
}


let cat = {
    poroda: 'Sphinx', 
    color: 'Black',
    age: '3 y.o.'

}

cat.eyes = 'green'
cat.showInfo = function() {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda} <br> 
    Цвет: ${cat.color} <br> 
    Возраст: ${cat.age} <br> 
    Глаза: ${cat.eyes} <br>` 
}

const questions = [
    {
        questions: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        questions: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no'
        },
        rightAnswer: '3'
    },
    {
        questions: 'Вопрос 3',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'no',
            4: 'no'
        },
        rightAnswer: '1'
    }
]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('resultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, resultContainer, resultContainer, resultButton) {
    let out = [];
    let answers;

    for(let i=0; i<questions.lenght; i++) {
        answers = [];
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type="radio" name="question${i}" value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
                
                );
            }
            out.push(
                `<div class="question"> ${questions[i].question} </div>
                <div class="anwers"> ${answers.join('')} </div>`
            );
    }

    
}

generateTest(questions, resultContainer, resultContainer, resultButton)

function showResult(questions, resultContainer, resultContainer, resultButton) {
    let answerContainers = testContainer.querySelectorAll('.answers');
    
    let userAnswer = '';
    let rightAnswerNum = 0;

    for(let i=0; i<questions.lenght; i++){

    }
}