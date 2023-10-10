window.addEventListener('DOMContentLoaded', ()=> {

    // Tabs Menu
    const tab = document.querySelectorAll('.tab-item');
    const tabParent = document.querySelector('.tabs-menu');
    const tabContent = document.querySelectorAll('.tabcontent');

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
});