setInterval(function() {
    let instance = new bootstrap.Carousel(document.querySelector('#carouselExample'));
    instance.next();
}, 3000);
setInterval(function() {
    let instance = new bootstrap.Carousel(document.querySelector('#carouselExample2'));
    instance.next();
}, 3000);