document.addEventListener('DOMContentLoaded', function() {
    // --- Данные персонажей ---
    const charactersData = [
        { name: "Исаак (Isaac)", unlock: "Доступен сразу. Начинает с бомбой. После убийства ??? получает D6 (кубик)." },
        { name: "Магдалина (Magdalene)", unlock: "Собрать 7 красных сердец за раз. Начинает с Yum Heart." },
        { name: "Каин (Cain)", unlock: "Собрать 55 монет за раз. Начинает с Lucky Foot и ключом." },
        { name: "Иуда (Judas)", unlock: "Пройти Шеол (ад) впервые. Начинает с книгой Belial." },
        { name: "??? (Синий малыш)", unlock: "Победить маму 10 раз. Начинает с The Poop, только синие сердца." },
        { name: "Ева (Eve)", unlock: "Пройти два этажа без подбора сердец. Начинает с Whore of Babylon и Dead Bird." },
        { name: "Самсон (Samson)", unlock: "Пройти два этажа без получения урона. Начинает с Bloody Lust." },
        { name: "Азазель (Azazel)", unlock: "Заключить 3 сделки с дьяволом за один забег. Летает, стреляет коротким лучом." },
        { name: "Лазарь (Lazarus)", unlock: "Собрать 4 синих/черных сердца за раз. Воскресает с усилением." },
        { name: "Эдем (Eden)", unlock: "Победить маму впервые. Случайные статы и предметы, тратит жетоны." },
        { name: "Потерянный (The Lost)", unlock: "Сложная цепочка смертей. Летает, без сердец, умирает от 1 удара. Имеет Holy Mantle после 879 монет в автомате." },
        { name: "Лилит (Lilith)", unlock: "Победить Жадный режим с Азазелем. Слепая, стреляет из фамильяра." },
        { name: "Хранитель (Keeper)", unlock: "Пожертвовать 1000 монет в автомате жадности. Здоровье — монеты." },
        { name: "Аполлион (Apollyon)", unlock: "Победить Мега-Сатану впервые. Начинает с Void (поглощает предметы)." },
        { name: "Забытый (The Forgotten)", unlock: "Особая миссия (лопата). Скелет с костяной дубиной и призрачная душа." },
        { name: "Вифания (Bethany)", unlock: "Победить маму с Лазарем без потери жизни. Использует души вместо зарядов." },
        { name: "Иаков и Исав (Jacob & Esau)", unlock: "Победить Матерь (Mother) впервые. Два персонажа одновременно." }
    ];

    // Заполняем контейнер с персонажами
    const characterContainer = document.getElementById('characterContainer');
    if (characterContainer) {
        charactersData.forEach(char => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <div class="character-name">${char.name}</div>
                <div class="unlock-method"><strong>Разблокировка:</strong> ${char.unlock}</div>
            `;
            characterContainer.appendChild(card);
        });
    }

    // --- Логика переключения вкладок ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Убираем active у всех кнопок и панелей
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Добавляем active на выбранную кнопку
        const activeButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (activeButton) activeButton.classList.add('active');

        // Показываем нужную секцию
        const activeContent = document.getElementById(tabId);
        if (activeContent) activeContent.classList.add('active');
    }

    // Навешиваем обработчики на кнопки
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Проверяем, есть ли хеш в URL для прямой ссылки
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (document.getElementById(hash)) {
            switchTab(hash);
        }
    }
});
