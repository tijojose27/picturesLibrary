﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Gallery.aspx.cs" Inherits="picturesLibrarys.Gallery" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Picture Libaray Page</title>
</head>
<body>
    
    <link href="gallery.css" rel="stylesheet" />
    <link href="jquery.fancybox.css" rel="stylesheet" />
    
    <script src="Scripts/jquery-2.1.0.min.js"></script>
    <script src="Scripts/jquery.imgpreload.min.js"></script>
    <script src="Scripts/jquery.fancybox.js"></script>
    <script src="gallery.js"></script>

    <div class="gallery_container">
        <div class="gallery_credit"><h1>Tijo Jose</h1></div>
        <div class="gallery_type"><h2>| Gallery |</h2></div>
        <div class="clear_both"></div>
        <div class="gallery_top"></div>
        <div class="gallery_content">
            <div class="gallery_thumbnails">
                <a href="Images/User Images/dramatic-landscape.jpg" title="Landscape Image">
                    <img alt="landscape" src="Images/User Images/dramatic-landscape_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/early-sunrays.jpg" title="sunrays">
                    <img alt="landscape" src="Images/User Images/early-sunrays_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/path-in-nature.jpg" title="Path">
                    <img alt="landscape" src="Images/User Images/path-in-nature_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/stockvault-ready-to-start.jpg" title="Person">
                    <img alt="landscape" src="Images/User Images/person_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/stockvault-city-skyline-at-sunset.jpg" title="Skyline">
                    <img alt="landscape" src="Images/User Images/stockvault-city-skyline-at-sunset_thumbnail.jpg" />
                </a>
                        <div class="clear_both"></div>
            </div>
            <div class="gallery_preview">
            </div>
            <div class="clear_both"></div>
            <div class="gallery_contact"><p>
                <a href="mailto:website@aol.com" class="contactlink">Contact Me</a>
                </p>
            </div>
            <div class="gallery_caption"></div>
            <div class="clear_both"></div>
            <div class="gallery_preload_area"></div>
        </div>
        <div class="gallery_bottom"></div>
    </div>
    <form id="form2" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
