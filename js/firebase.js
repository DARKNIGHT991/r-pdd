import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Твой конфиг из старого файла
const firebaseConfig = {
    apiKey: "ТВОЙ_API_KEY",
    authDomain: "ТВОЙ_ПРОЕКТ.firebaseapp.com",
    projectId: "ТВОЙ_ПРОЕКТ",
    // ... остальные данные
};

// Инициализация
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Функция для отправки результатов (экспортируем её)
export async function saveTestResult(username, score, timeSpent) {
    try {
        await addDoc(collection(db, "results"), {
            name: username,
            score: score,
            time: timeSpent,
            date: new Date().toISOString()
        });
        console.log("Нәтиже сақталды! / Результат сохранен!");
    } catch (e) {
        console.error("Қате / Ошибка: ", e);
    }
}
