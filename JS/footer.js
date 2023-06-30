// Отримуємо всі елементи з класом "quick"
var quickElements = document.getElementsByClassName('quick');

// Перебираємо кожен елемент з класом "quick"
for (var i = 0; i < quickElements.length; i++) {
    var quickElement = quickElements[i];

    // Додаємо обробник події 'click' до кожного елементу "quick"
    quickElement.addEventListener('click', function() {
        // Знаходимо наступний елемент після стрілки, який має клас "quick-links"
        var quickLinks = this.nextElementSibling;

        // Змінюємо стиль елементу "quick-links"
        quickLinks.style.display = (quickLinks.style.display === 'flex') ? 'none' : 'flex';

        // Знаходимо зображення стрілки в поточному елементі "quick"
        var arrowImage = this.querySelector('img');

        // Додаємо або видаляємо клас "rotate" для зображення стрілки
        arrowImage.classList.toggle('rotate');
    });
}
