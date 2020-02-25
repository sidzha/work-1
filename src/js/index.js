const $div1 = $('.page-main-2__list'),
  $div2 = $('.page-main-2__price'),
  currentDiv = 'div1',
  $button = $('button');

$div2.hide();

$(document).on('click', 'button', function(evt) {
  $div1.toggle('slide', { direction: 'left' }, 'slow');
  $div2.toggle('slide', { direction: 'right' }, 'slow');

  currentDiv = currentDiv === 'div1' ? 'div2' : 'div1';
});
