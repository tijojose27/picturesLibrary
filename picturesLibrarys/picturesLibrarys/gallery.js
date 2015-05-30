/// <reference path="Scripts/jquery-2.1.0.min.js" />
/// <reference path="Scripts/jquery.imgpreload.min.js" />
/// <reference path="Scripts/jquery-2.1.0.intellisense.js" />
/// <reference path="Scripts/jquery-2.1.0.js" />
/// <reference path="Scripts/jquery.fancybox.js" />

$(document).ready(function () {
    $('.gallery_thumbnails a').hover(function (e) {

        e.preventDefault();

        //setting up variables
        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var size = (photo_fullsize.length - 4);
        var photo_preview = photo_fullsize.slice(0, parseInt(size)) + "_preview" + photo_fullsize.slice(parseInt(size));

        $('.gallery_caption').slideUp(1000);
        $('.gallery_preview').fadeOut(1010, function () {

            $('.gallery_preload_area').html('<img src="' + photo_preview + '" />');
            $('.gallery_preload_area img').imgpreload(function () {

                $('.gallery_preview').html('<a class="overlaylink" title="' + photo_caption + '" href="' + photo_fullsize + '" style="background-image:url(\'' + photo_preview + '\');"></a>');

                $('.gallery_caption').html('<p><a class="overlaylink zoom" href="' + photo_fullsize + '" title="' + photo_caption + '">View Larger</a></p><p>' +photo_caption + '</p>');

                $('.gallery_preview').fadeIn(1000);
                $('.gallery_caption').slideDown(1000);

                setFancyboxLinks();
                thumbnailupdater();
            });
        });
    });


    //initialize gallery on load
    var first_photo_caption = $('.gallery_thumbnails a').first().attr('title');
    var first_photo_fullsize = $('.gallery_thumbnails a').first().attr('href');
    var size = (first_photo_fullsize.length - 4);
    var first_photo_preview = first_photo_fullsize.slice(0, parseInt(size)) + "_preview" + first_photo_fullsize.slice(parseInt(size));

    $('.gallery_caption').slideUp(1000);
    $('.gallery_preview').fadeOut(1010, function () {

        $('.gallery_preload_area').html('<img src="' + first_photo_preview + '" />');
        $('.gallery_preload_area img').imgpreload(function () {

            $('.gallery_preview').html('<a class="overlaylink" title="' + first_photo_caption + '" href="' + first_photo_fullsize + '" style="background-image:url(\'' + first_photo_preview + '\');"></a>');

            $('.gallery_caption').html('<p><a class="overlaylink zoom" href="' + first_photo_fullsize + '" title="' + first_photo_caption + '">View Larger</a></p><p>' + first_photo_caption + '</p>');

            $('.gallery_preview').fadeIn(1000);
            $('.gallery_caption').slideDown(1000);

            setFancyboxLinks();
            thumbnailupdater();
        });

    });

});


function setFancyboxLinks() {

    $('a.overlaylink').fancybox({
        'titlePosition': 'over',
        'overlayColor': '#000',
        'overlayOpacity': 0.8,
        'openEffect': 'elastic',
        'openSpeed' : 200,
        'closeEffect': 'elastic',
        'closeSpeed' : 200,
        'autoScale': true,

    });

}

function thumbnailupdater() {
    $('.gallery_thumbnails a').each(function () {
        if ($('.gallery_preview a').attr('href') == $(this).attr('href')) {
            $(this).addClass('selected');
            $(this).children().fadeTo(500, 0.4);
        } else {
            $(this).removeClass('selected');
            $(this).children().css('opacity','1');
        }
    })
}