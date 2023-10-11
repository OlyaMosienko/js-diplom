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

    // Sliders
    const slide = document.querySelectorAll('.testi-item');
    const prev = document.querySelector('.tc-button-prev');
    const next = document.querySelector('.tc-button-next');

    let slideIndex = 1;
    showSlide(slideIndex);
    function showSlide(n) {
        if(n > slide.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slide.length;
        }
        slide.forEach(item => item.style.display = 'none');
        slide[slideIndex - 1].style.display = 'block';
    }

    function plusSlide(n) {
        showSlide(slideIndex += n);
    }
    prev.addEventListener('click', () => {
        plusSlide(-1);
    });
    next.addEventListener('click', () => {
        plusSlide(1);
    })
});