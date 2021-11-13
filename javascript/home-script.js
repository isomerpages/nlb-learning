var swiper = new Swiper('#image_carousel', {
    loop: false,
    pagination: {
    el: '#swiper_pagination',
    type: 'bullets',
    clickable: true,
    },
    navigation: {
    nextEl: '#swiper_btn_next',
    prevEl: '#swiper_btn_prev',
    }
});

console.log("swiper");