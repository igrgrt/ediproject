document.addEventListener("DOMContentLoaded", function () {

    var egpLink = document.querySelector('.right-menu a[href="#egp"]');
    var tabelaLink = document.querySelector('.right-menu a[href="#tabela"]');
    var psdLink = document.querySelector('.right-menu a[href="#psd"]');
    var ldataLink = document.querySelector('.right-menu a[href="#ldata"]');
    var reaLink = document.querySelector('.right-menu a[href="#rea"]');
    
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

    egpLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(egpLink.getAttribute('href'), 1000);
    });

    tabelaLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(tabelaLink.getAttribute('href'), 1000);
    });

    psdLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(psdLink.getAttribute('href'), 1000);
    });

    ldataLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(ldataLink.getAttribute('href'), 1000);
    });

    reaLink.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(reaLink.getAttribute('href'), 1000);
    });

    function scrollToSection(selector) {
        var targetElement = document.querySelector(selector);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});
