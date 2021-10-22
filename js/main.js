var $tab = $('#tab-informes'),
    $navPrincipal = $('#navPrincipal');

$(window).on('scroll', function () {
    $tab.css("top", $navPrincipal.outerHeight(true) + "px")
})
