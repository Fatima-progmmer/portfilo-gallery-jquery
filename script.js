$(document).ready(function () {
    // Filter grid items
    $('.filter-btn').on('click', function () {
        var filter = $(this).data('filter');
        $('.grid-item').removeClass('hide');
        if (filter !== '*') {
            $('.grid-item').not(filter).addClass('hide');
        }
        // Remove active class from all buttons
        $('.filter-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');
    });
});