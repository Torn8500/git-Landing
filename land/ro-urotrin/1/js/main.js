/*
  плавный скролл, внимание для якорей обязательно необходимо 
  проставить id соответствующие адресам ссылок к этим якорям
  <a id="top"></a>
  <a href="#top">Наверх</a>
*/

$('a[href ^= "#"]').on('click',function(e) {
  var id = $(this).attr('href');
  var top = $(id).offset();
  if (!top) {
    console.log('якорь '+id+' не найден, необходимо проставить ID для якорей');
  }else{
    e.preventDefault();
    $('body,html').animate({scrollTop: top.top}, 1000);
  }
});