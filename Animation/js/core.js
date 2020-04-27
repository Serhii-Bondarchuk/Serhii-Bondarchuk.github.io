jQuery(document).ready(function(){
   // нам нужны две переменные hero что бы получить контроль над героем и laser  над лазером, устанавливаем таймер
   var $hero = jQuery('#hero'),
        $laser = $hero.find('.laser');
  // $laser.removeClass('laser');
  // в єтой строчке каждые 5 секунд будет менятся клас с idle на attack
    function scan() {
      $hero.removeClass('idle').addClass('attack');
// $laser.addClass('laser');

      setTimeout(function() {
        $hero.removeClass('attack').addClass('idle');
        // $laser.removeClass('laser');
      }, 4000);
    }
  setInterval(scan, 8000);
});
