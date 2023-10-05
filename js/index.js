window.addEventListener('DOMContentLoaded', ()=> {

    // Tabs Menu
    const tab = document.querySelectorAll('.tab-item');
    const tabParent = document.querySelector('.tabs-menu');
    const tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove('current');
        })
    }
    function showTabContent( i = 0 ) {
        tabContent[i].style.display = 'block';
        tab[i].classList.add('current');
    }
    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tab-item')) {
            tab.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Получаем все элементы вкладок и контента
// var tabItems = document.querySelectorAll('.tab-item');
// var tabContents = document.querySelectorAll('.tab-content');

// // Добавляем обработчик события клика на каждую вкладку
// tabItems.forEach(function(item) {
//   item.addEventListener('click', function() {
//     // Удаляем класс 'current' у всех вкладок и контента
//     tabItems.forEach(function(tab) {
//       tab.classList.remove('current');
//     });
//     tabContents.forEach(function(content) {
//       content.classList.remove('current');
//     });
    
//     // Добавляем класс 'current' к выбранной вкладке и соответствующему контенту
//     this.classList.add('current');
//     var tabId = this.getAttribute('href');
//     document.querySelector(tabId).classList.add('current');
//   });
// });
});