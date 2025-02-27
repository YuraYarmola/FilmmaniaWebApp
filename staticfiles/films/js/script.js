document.addEventListener("DOMContentLoaded", function () {
    // Плавне відкриття опису
    let showMoreBtn = document.getElementById("showMoreBtn");
    let fullDescription = document.getElementById("fullDescription");

    showMoreBtn.addEventListener("click", function () {
        if (fullDescription.classList.contains("hidden")) {
            fullDescription.classList.remove("hidden");
            fullDescription.style.opacity = "1";
            showMoreBtn.textContent = "Сховати";
        } else {
            fullDescription.style.opacity = "0";
            setTimeout(() => fullDescription.classList.add("hidden"), 500);
            showMoreBtn.textContent = "Показати більше";
        }
    });

    // Діалогове вікно
    let modal = document.getElementById("filmModal");
    let openModalBtn = document.getElementById("openModalBtn");
    let closeModal = document.querySelector(".close");
    let overlay = document.getElementById("overlay");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    // Спливаюче вікно при виході курсора за межі сторінки
    let exitPopupShown = false;
    document.addEventListener("mouseleave", function (event) {
        if (event.clientY < 10 && !exitPopupShown) {
            alert("Не йдіть! Подивіться ще наші фільми!");
            exitPopupShown = true;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const overlay = document.getElementById("overlay");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Запобігає закриттю при кліку на меню
        const isActive = this.classList.contains("active");

        // Закриваємо всі інші відкриті меню
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
        overlay.classList.remove("active");

        // Якщо меню було неактивним — відкриваємо
        if (!isActive) {
            this.classList.add("active");
            overlay.classList.add("active");
        }
    });

    // Закриваємо меню при кліку поза ним
    document.addEventListener("click", function () {
        dropdown.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Не закриваємо меню при кліку всередині нього
    dropdownContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', () => {
        const dropdownBtn = document.querySelector('.dropdown-btn');
        const dropdown = document.querySelector('.dropdown');

        dropdownBtn.addEventListener('click', () => {
            dropdown.classList.toggle('show');
        });

        // Закриваємо меню при кліку за межами
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    });

document.getElementById('toggle-filters').addEventListener('click', function() {
    var filtersContainer = document.getElementById('filters-container');
    var isVisible = filtersContainer.style.display === 'block'; // Перевірка, чи зараз фільтри показані

    // Перемикаємо видимість
    if (isVisible) {
        filtersContainer.style.display = 'none';
        this.textContent = 'Показати фільтри'; // Змінюємо текст кнопки
    } else {
        filtersContainer.style.display = 'block';
        this.textContent = 'Сховати фільтри'; // Змінюємо текст кнопки
    }
});

document.getElementById('reset-filters').addEventListener('click', function() {
        window.location.href = '/films/';
});
