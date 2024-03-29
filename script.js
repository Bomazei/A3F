const navLeft = document.querySelector('.banner-nav-left')
const navRight = document.querySelector('.banner-nav-right')
const banner1 = document.querySelector('.banner-1')
const banner2 = document.querySelector('.banner-2')
const vitara = document.querySelector('.vitara')
const sx4 = document.querySelector('.sx4')

navLeft.addEventListener('click', function(){
    slideLeft()
})
navRight.addEventListener('click', function(){
    slideRight()
})
vitara.addEventListener('click', function(){
    slideLeft()
})
sx4.addEventListener('click', function(){
    slideRight()
})

function slideLeft(){
    navRight.classList.remove('banner-nav-active')
    navLeft.classList.add('banner-nav-active')
    banner1.classList.add('banner-active')
    banner2.classList.remove('banner-active')
    sx4.classList.remove('selected')
    vitara.classList.add('selected')
}
function slideRight(){
    navLeft.classList.remove('banner-nav-active')
    navRight.classList.add('banner-nav-active')
    banner2.classList.add('banner-active')
    banner1.classList.remove('banner-active')
    vitara.classList.remove('selected')
    sx4.classList.add('selected')
}


ymaps.ready(init);
function init(){
   
    var myMap = new ymaps.Map("map", {
        center: [59.897289, 30.522013],
        zoom: 14
    })
    var placemark = new ymaps.Placemark(myMap.getCenter(), {
        
        balloonContentHeader: '<br/><h2>Контакты</h2><br/>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: "г. Санкт-Петербург, Мурманское шоссе, 12-й километр, 5",
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '<b>Режим работы:</b> Ежедневно, с 08:00 до 21:00',
        // Зададим содержимое всплывающей подсказки.
        hintContent: "Мурманское шоссе, 12-й километр, 5"
    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
    
}