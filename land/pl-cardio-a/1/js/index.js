
$(document).ready(function() {

    $('.js-commits__box').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            960 : {
                items: 3
            }
        }
    });

    Start();
    // function Start() {
    //     var m = 22,
    //         s = 0;

    //     if (m <= 9) {
    //         m = "0" + m;
    //     };

    //     var timerId = setTimeout(function tick() {
    //         if (s != 0) {
    //             s = s - 1;

    //             if (s <= 9) {
    //                 s = "0" + s;
    //             }
    //         } else {
    //             if (m != 0) {
    //                 m = m - 1;
    //                 s = 59;

    //                 if (m <= 9) {
    //                     m = "0" + m;
    //                 }
    //             } else {
    //                 return
    //             }
    //         }

    //         $('.form__time-count:nth-of-type(2) span:first-child').text(m);
    //         $('.form__time-count:last-child span:first-child').text(s);
    //         timerId = setTimeout(tick, 1000);
    //     }, 1000);
    // }

    // Start();

    function Start() {
        const now = new Date();
    
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    
        const secondsRemaining = (endOfDay - now);
    
        setInterval(() => {
          const now = new Date();
          const secondsRemaining = Math.floor((endOfDay - now)/1000);
    
          const hours = Math.floor(secondsRemaining / 3600).toString().padStart(2, '0');
          const minutes = Math.floor((secondsRemaining - (hours * 3600)) / 60).toString().padStart(2, '0');
          const seconds = Math.floor(secondsRemaining % 60).toString().padStart(2, '0');
    
          $('.form__time-count:first-child span:first-child').text(hours);
          $('.form__time-count:nth-of-type(2) span:first-child').text(minutes);
          $('.form__time-count:last-child span:first-child').text(seconds);
        }, 1000);
      }

    AOS.init({
      once: false,
      mirror: true
    });
});
