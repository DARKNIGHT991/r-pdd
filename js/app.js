// Импортируем функцию сохранения из соседнего файла
import { saveTestResult } from './firebase.js';

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentLang = 'kz'; // 'kz' или 'ru'
let timerInterval;

// 1. Загрузка вопросов из JSON при старте
async function loadQuestions() {
    try {
        const response = await fetch('./data/questions.json');
        questions = await response.json();
        startTest(); // Запускаем тест только после загрузки вопросов!
    } catch (error) {
        console.error("Сұрақтарды жүктеу қатесі / Ошибка загрузки вопросов:", error);
    }
}

function startTest() {
    // Твоя логика старта, перемешивания вопросов и запуска таймера
    showQuestion();
    startTimer();
}

function showQuestion() {
    // Отображение вопроса в зависимости от currentLang (kz/ru)
}

// 2. Түн/Күн режимі (Смена темы)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 3. Тіл ауыстыру (Смена языка)
const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'kz' ? 'ru' : 'kz';
    showQuestion(); // Перерисовываем текущий вопрос на новом языке
});

// 4. Завершение теста и отправка в Firebase
function finishTest() {
    clearInterval(timerInterval);
    // Вызываем функцию из firebase.js
    saveTestResult("User1", score, 120); 
}

// ВАЖНО: Если в твоем HTML есть кнопки с onclick="checkAnswer()", 
// при использовании модулей нужно привязать функции к глобальному объекту window:
window.checkAnswer = function(selectedIndex) {
    // твоя логика проверки ответа
};

// Запуск при открытии страницы
loadQuestions();
