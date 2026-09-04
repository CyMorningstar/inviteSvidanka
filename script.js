const TOKEN = "8966154037:AAFNqH4hKJBw1QbK1jljIU_YsUi0VS9rnv8"; 
const CHAT_ID = "1280916980";

// Логика убегающей кнопки
// В script.js для кнопки "Нет"
const noBtn = document.getElementById('no-btn');
const btnContainer = document.getElementById('btn-container');

noBtn.addEventListener('mouseover', () => {
    // Включаем "режим бегства"
    noBtn.style.position = 'fixed'; 
    noBtn.style.top = (Math.random() * 80) + 'vh';
    noBtn.style.left = (Math.random() * 80) + 'vw';
});

// Дополнительно: чтобы на телефоне тоже работало
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    noBtn.style.position = 'fixed';
    noBtn.style.top = (Math.random() * 80) + 'vh';
    noBtn.style.left = (Math.random() * 80) + 'vw';
});


// Переход по клику на печать
document.getElementById('stamp-btn').onclick = () => {
    const music = document.getElementById('bg-music');
    music.volume = 0.3; // Громкость 30%
    music.play();
    document.getElementById('envelope-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
};

function showChoices() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('choice-screen').classList.remove('hidden');
}

// Отправка в ТГ
document.getElementById('send-preferences-btn').onclick = async () => {
    const selected = Array.from(document.querySelectorAll('input:checked')).map(i => i.value);
    const text = `Карина выбрала: ${selected.join(', ')}`;
    
    // Используем encodeURIComponent, чтобы текст не сломался из-за пробелов или смайликов
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=\({CHAT_ID}&text=\){encodeURIComponent(text)}`;
    
    try {
        let response = await fetch(url);
        if (response.ok) {
            alert("Спасибо, Карина! Данные отправлены.");
        } else {
            alert("Ошибка отправки. Проверь консоль.");
        }
    } catch (e) {
        console.error("Ошибка сети:", e);
    }
};
