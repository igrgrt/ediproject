document.addEventListener("DOMContentLoaded", function () {

    var opisLink = document.querySelector('.right-menu a[href="#tabela"]');


    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var ease = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }


    opisLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(opisLink.getAttribute('href'), 1000); 
    });
});