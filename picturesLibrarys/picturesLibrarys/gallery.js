/// <reference path="Scripts/jquery-2.1.0.min.js" />
/// <reference path="Scripts/jquery.imgpreload.min.js" />
/// <reference path="Scripts/jquery-2.1.0.intellisense.js" />
/// <reference path="Scripts/jquery-2.1.0.js" />

$(document).ready(function () {
    $('.gallery_thumbnails a').click(function (e) {

        e.preventDefault();

        //thumbnails
        $('.gallery_thumbnails a').removeClass('selected');
        $('.gallery_thumbnails a').children().css('opacity', '1');

        $(this).addClass('selected');
        $(this).children().css('opacity', '0.4');

        //setting up variables
        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var size = (photo_fullsize.length - 4);
        var photo_preview = photo_fullsize.slice(0, parseInt(size)) + "_preview" + photo_fullsize.slice(parseInt(size));

        $('.gallery_caption').slideUp(1000);
        $('.gallery_preview').fadeOut(1000, function () {

            $('.gallery_preview').html('<a title="' + photo_caption + '" href="' + photo_fullsize + '" style="background-image:url(\'' + photo_preview + '\');"></a>');

            $('.gallery_caption').html('<p><a href="' + photo_fullsize + '" title="' + photo_caption + '">View Larger</a></p><p>' + photo_caption + '</p>');

            $('.gallery_preview').fadeIn(1000);
            $('.gallery_caption').slideDown(1000);
        });


            

        

    });
});