var outtt = 0;


$(document).ready(function() {$('.calc-form input').change(function() {
        calc();
    });

    $('.calc-form input').keyup(function() {
        calc();
    });


});

function calc() {
    var age = $('.calc-form .inp1').val();
    var height2 = $('.calc-form .inp2').val();
    var weight2 = $('.calc-form .inp3').val();

    age = parseInt(age.replace(/\D+/g, ""));
    height2 = parseInt(height2.replace(/\D+/g, ""));
    weight2 = parseInt(weight2.replace(/\D+/g, ""));

    console.log(age);

    if (age > 0 && height2 > 0 && weight2 > 0) {
        if (weight2 < 55) {
            $('.calc-form .line1').attr('style', 'visibility: display;');
            $('.calc-form .line2').attr('style', 'visibility: display;');
            $('.calc-form .line1').html('<span class="green">น้ำหนักตามเกณฑ์</span>');
            $('.calc-form .line2').html('อยู่ในช่วงปลอดภัย ควรควบคุมอาหาร!');
        } else {
            if (weight2 >= 55 && weight2 < 70) {
                $('.calc-form .line1').attr('style', 'visibility: display;');
                $('.calc-form .line2').attr('style', 'visibility: display;');
                $('.calc-form .line1').html('โรคอ้วน<br>ระดับ 1');
                $('.calc-form .line2').html('เริ่มการรักษาทันที!');
            } else {
                if (weight2 >= 70 && weight2 < 80) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('โรคอ้วน<br>ระดับ 2');
                    $('.calc-form .line2').html('เริ่มการรักษาทันที!');
                } else {
                if (weight2 >= 80 ) {
                    $('.calc-form .line1').attr('style', 'visibility: display;');
                    $('.calc-form .line2').attr('style', 'visibility: display;');
                    $('.calc-form .line1').html('โรคอ้วน<br>ระดับ 3');
                    $('.calc-form .line2').html('เริ่มการรักษาทันที!');
                }
            }
            }
        }
    }

}
