$navIcon.on('click', function(event) {
    event.preventDefault();
    $mainNav.slideToggle($toggleSpeed);
    $navIcon.toggleClass('icon-menu icon-close');
});

$searchFormIcon.on('click', function () {
    $searchForm.animate({width: 'toggle'});
});