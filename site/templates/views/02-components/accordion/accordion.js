const $accordionItem = $('.cp-accordion .el-accordion-item');
const $accordionContainer = $('.accordion-items .accordion-container');
const $accordionTitle = $('.cp-accordion .accordion-title');

$($accordionTitle).click(function (e) {
  e.preventDefault();

  $openItem = !$(this).parent().hasClass('open') && !$(this).parent().hasClass('already-open')

  $accordionContainer.slideUp($toggleSpeed);
  $accordionItem.removeClass('open already-open');

  if ($openItem) {
    $(this).siblings('.accordion-container').slideDown($toggleSpeed);
    $(this).parent().addClass('open');
  }
});