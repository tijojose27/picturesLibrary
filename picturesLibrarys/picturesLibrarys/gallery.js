/// <reference path="Scripts/jquery-2.1.0.min.js" />
/// <reference path="Scripts/jquery-2.1.0.intellisense.js" />
/// <reference path="Scripts/jquery-2.1.0.js" />

$(document).ready(function () {
    $('.gallery_thumbnails a').click(function (e) {

        e.preventDefault();

        $('.gallery_thumbnails a').removeClass('selected');
        $('.gallery_thumbnails a').children().css('opacity', '1');
        
        $(this).addClass('selected');
        $(this).children().css('opacity', '0.4');


        var photo_caption = $(this).attr('title');
        var photo_fullsize = $(this).attr('href');
        var photo_preview = photo_fullsize.replace('_fullsize', 'preview');

        $('.gallery_preview').html('<a href = "x" title="x" style="background-image:url(x);"></a>');
    });
})