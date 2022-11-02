document.addEventListener('DOMContentLoaded', function(){
  //native js


  setTimeout(function() {
    var romFooter = document.querySelector('.create_rom_footer');

    romFooter.insertAdjacentHTML("afterbegin", '<div class="rom-footer"><div class="rom_left"> <a href="http://www.anpc.gov.ro/" class="rom_link">ANPC</a><p class="rom_p">Infocons: 0219551</p></div><div class="rom_center"> <a class="logo-link" href="https://everad.com/"><svg class="rom_svg" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 2700 2450"><path class="rom_svg_color" d="M1803.6 2c.1 34.3.1 68.7.2 103v247.8C1304.2 644 804.6 935.2 304.9 1226.4c6.4 7 1435.2 841.5 1499.2 875.7 298.3-174 597.1-348.4 897.2-523.4v349.9c-3.2 2-7.1 4.5-11.1 6.8-160.6 93.7-321.2 187.3-481.7 281-132.1 77.1-264.2 154.2-396.2 231.2-2.3 1.3-4.4 2.9-6.7 4.3h-4c-3.9-2.5-7.7-5.2-11.6-7.5-138.7-80.8-277.4-161.7-416.1-242.5-277.1-161.5-554.3-323-831.4-484.5-176.7-103-353.4-206-530.1-308.9-3.4-2-7.2-3.1-10.8-4.6v-352c3.3-1.3 6.9-2.3 9.9-4.1 36.9-21.4 73.7-42.9 110.6-64.4 498.1-290.6 996.3-581.2 1494.4-871.8 57.3-33.4 114.5-66.8 171.8-100.2 3.9-2.3 8.6-4 9.3-9.5 2 .1 4 .1 6 .1z"/><path class="rom_svg_color" d="M2103.1 877.7c-299.9 175.1-599.6 350.2-899.9 525.5-99.5-58.3-198.7-116.5-299.9-175.7C1304 993.7 1703 760.9 2103.1 527.4v350.3zm300 175.3v350.3c-199.6 116.6-399.2 233.2-599.3 350-99.9-58.4-199.6-116.5-300.9-175.7 300.8-175.2 599.7-349.4 900.2-524.6z"/></svg></a> <a href="privacy.html" target="_blank" class="rom_link">Politica de confidențialitate</a></div><div class="rom_right"> <p class="rom_contact rom_p"><span><a href="tel:+40316301953" class="rom_link">Tel. +40 316 301 953</a></span></p><a href="mailto:makeprofitlpp@gmail.com" class="rom_link">makeprofitlpp@gmail.com</a></div></div>');

    var colorText = romFooter.getAttribute('data-color_text'),
        colorLink = romFooter.getAttribute('data-color_link'),
        colorLogo = romFooter.getAttribute('data-color_logo'),
        head = document.querySelector('head'),
        romText = document.querySelectorAll('.rom_p'),
        romLink = document.querySelectorAll('.rom_link'),
        romIcon = document.querySelectorAll('.rom_svg_color');

    for (let i = 0; i < romText.length; i++) {
      romText[i].style.color = colorText;
    };
    for (let i = 0; i < romLink.length; i++) {
      romLink[i].style.color = colorLink;
    };
    for (let i = 0; i < romText.length; i++) {
      romIcon[i].style.fill = colorLogo;
    };

    head.insertAdjacentHTML("afterbegin", '<style>.rom-footer{font-size:0}.rom-footer *{margin:0;padding:0}.rom_left,.rom_right{display:inline-block;vertical-align:top;width:33.3%;font-size:16px; line-height: 26px}.logo-link{display: block;text-decoration: none!important;width: 30px;height: 30px;margin: auto;}.rom_left{text-align:left}.rom_right{text-align:right}.rom_center{text-align: center;font-size:16px;line-height: 26px;width:33.3%;display:inline-block}.rom_show_contact{display:inline-block;cursor:pointer}.rom_p{margin:0}.rom-footer .rom_link{display:inline-block;text-decoration:none}.rom-footer .rom_link:hover{text-decoration:underline}.rom_svg{width:30px;height:30px;display:block;margin:0 auto}@media screen and (max-width: 768px){.rom_left,.rom_right,.rom_center{width:100%;text-align:center;display:block}.rom_left{margin-bottom:20px}.rom_svg{margin-bottom: 5px}}</style>')
  });


});
