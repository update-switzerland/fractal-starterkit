$(document).ready(function(){const $toggleSpeed = 200;

const $mainNav = $('header .nav-container nav.main-nav');
const $navIcon = $('header .nav-container .mob-nav a');

const $searchForm = $('header .search .search-form-container form');
const $searchFormIcon = $('header .search .search-form-container .icon');

lightbox.option({
  'resizeDuration': 200
});
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

$navIcon.on('click', function(event) {
    event.preventDefault();
    $mainNav.slideToggle($toggleSpeed);
    $navIcon.toggleClass('icon-menu icon-close');
});

$searchFormIcon.on('click', function () {
    $searchForm.animate({width: 'toggle'});
});});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyIsIjAxLWVsZW1lbnRzL2J1dHRvbi9idXR0b24uanMiLCIwMS1lbGVtZW50cy9pbWFnZS1nYWxsZXJ5L2ltYWdlLWdhbGxlcnkuanMiLCIwMi1jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCIwMi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCIwMi1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQ0FBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGVtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICR0b2dnbGVTcGVlZCA9IDIwMDtcblxuY29uc3QgJG1haW5OYXYgPSAkKCdoZWFkZXIgLm5hdi1jb250YWluZXIgbmF2Lm1haW4tbmF2Jyk7XG5jb25zdCAkbmF2SWNvbiA9ICQoJ2hlYWRlciAubmF2LWNvbnRhaW5lciAubW9iLW5hdiBhJyk7XG5cbmNvbnN0ICRzZWFyY2hGb3JtID0gJCgnaGVhZGVyIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWNvbnRhaW5lciBmb3JtJyk7XG5jb25zdCAkc2VhcmNoRm9ybUljb24gPSAkKCdoZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0tY29udGFpbmVyIC5pY29uJyk7IiwiIiwibGlnaHRib3gub3B0aW9uKHtcbiAgJ3Jlc2l6ZUR1cmF0aW9uJzogMjAwXG59KTsiLCJjb25zdCAkYWNjb3JkaW9uSXRlbSA9ICQoJy5jcC1hY2NvcmRpb24gLmVsLWFjY29yZGlvbi1pdGVtJyk7XG5jb25zdCAkYWNjb3JkaW9uQ29udGFpbmVyID0gJCgnLmFjY29yZGlvbi1pdGVtcyAuYWNjb3JkaW9uLWNvbnRhaW5lcicpO1xuY29uc3QgJGFjY29yZGlvblRpdGxlID0gJCgnLmNwLWFjY29yZGlvbiAuYWNjb3JkaW9uLXRpdGxlJyk7XG5cbiQoJGFjY29yZGlvblRpdGxlKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgJG9wZW5JdGVtID0gISQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ29wZW4nKSAmJiAhJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnYWxyZWFkeS1vcGVuJylcblxuICAkYWNjb3JkaW9uQ29udGFpbmVyLnNsaWRlVXAoJHRvZ2dsZVNwZWVkKTtcbiAgJGFjY29yZGlvbkl0ZW0ucmVtb3ZlQ2xhc3MoJ29wZW4gYWxyZWFkeS1vcGVuJyk7XG5cbiAgaWYgKCRvcGVuSXRlbSkge1xuICAgICQodGhpcykuc2libGluZ3MoJy5hY2NvcmRpb24tY29udGFpbmVyJykuc2xpZGVEb3duKCR0b2dnbGVTcGVlZCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICB9XG59KTsiLCIiLCIkbmF2SWNvbi5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJG1haW5OYXYuc2xpZGVUb2dnbGUoJHRvZ2dsZVNwZWVkKTtcbiAgICAkbmF2SWNvbi50b2dnbGVDbGFzcygnaWNvbi1tZW51IGljb24tY2xvc2UnKTtcbn0pO1xuXG4kc2VhcmNoRm9ybUljb24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICRzZWFyY2hGb3JtLmFuaW1hdGUoe3dpZHRoOiAndG9nZ2xlJ30pO1xufSk7Il19
