<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="picturesLibrarys.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Picture Libaray Page</title>
    <style type="text/css">
    </style>
</head>
<body>
    <link href="gallery.css" rel="stylesheet" />
    <div class="gallery_container">
        <div class="gallery_credit"><h1>Tijo Jose</h1></div>
        <div class="gallery_type"><h2>| Gallery |</h2></div>
        <div class="clear_both"></div>
        <div class="gallery_top"></div>
        <div class="gallery_content">
            <div class="gallery_thumbnails">
                <a href="Images/User Images/dramatic-landscape127093.jpg" title="Landscape Image">
                    <img alt="landscape" class="auto-style2" src="Images/User%20Images/dramatic-landscape_thumbnailjpg.jpg" />
                </a>
                <a href="Images/User Images/early-sunrays102413.jpg" title="sunrays">
                    <img alt="landscape" class="auto-style2" src="Images/User%20Images/early-sunrays_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/path-in-nature124348.jpg" title="Path">
                    <img alt="landscape" class="auto-style2" src="Images/User%20Images/path-in-nature_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/stockvault-ready-to-start102438.jpg" title="Person">
                    <img alt="landscape" class="auto-style2" src="Images/User%20Images/person_thumbnail.jpg" />
                </a>
                <a href="Images/User Images/stockvault-city-skyline-at-sunset-113039.jpg" title="Skyline">
                    <img alt="landscape" class="auto-style2" src="Images/User%20Images/stockvault-city-skyline-at-sunset_thumbnail.jpg" />
                </a>
                        <div class="clear_both"></div>
            </div>
            <div class="gallery_preview">
                img
            </div>
            <div class="clear_both"></div>
            <div class="gallery_contact">
                text
            </div>
            <div class="gallery_caption">text</div>
            <div class="clear_both"></div>
            <div class="gallery_preload_area"></div>
        </div>
        <div class="gallery_bottom"></div>
    </div>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
