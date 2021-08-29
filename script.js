new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['section0', 'section1', 'section2', 'section3'],
    controlArrows: false,
    slidesNavigation: true,
    responsiveWidth: 800
})

// chamada da função modal
$(document).ready(function() {
        $('#exemplomodal').modal('show');
})