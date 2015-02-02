<?php
/**
 * Created by PhpStorm.
 * User: CJ
 * Date: 2/2/15
 * Time: 10:18 AM
 */

?>

<!DOCTYPE html>
<!--Only worrying about html5 here. My time is limited, and the 20% (or whatever it is now) of legacy browser users are not the target audience for this,-->
<!--so apologies if you are unable to view this correctly in IE8, or something similar-->
<html>
<head>
    <script src="js/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="js/jquery-color-plugin.js" type="text/javascript"></script>
    <script src="js/jquery_ui/jquery-ui-1.11.1/jquery-ui.js" type="text/javascript"></script>
    <!--    <script src="js/about.js" type="text/javascript"></script>-->


    <link rel="stylesheet" type="text/css" href="css/main.css">

    <!--    <script src="http://code.highcharts.com/highcharts.js"></script>-->
    <title>About Me</title>
</head>



<body>

<div id="nav-bar-container">
    <div id="nav-bar">
        <div id="nav">
            <span class="nav-button active" data-panel-num="0">Page 1</span>
            <span class="nav-button" data-panel-num="1">Page 2</span>
            <span class="nav-button" data-panel-num="2">Page 3</span>
        </div>
        <div id="bottom-slant"></div>
    </div>

</div>
<div id="right-arrow" class="arrow"></div>
<div id="left-arrow" class="arrow"></div>

<div style=" position: relative; width: 100%; min-height: 100vh; z-index: -5">
    <div id="slide-0-0" class="slide">
        <!--        <div style="position: relative;min-width: 100%; min-height: 100vh;">-->
        <div class="slide-shader"></div>
        <!--        </div>-->
        <div class="slide-content">
        </div>
    </div>

    <div id="slide-1-0" class="slide">
        <div class="slide-content">
            <?php
            for ($i = 0; $i < 15; $i++){
                echo "<p>Line $i</p>";
            }
            ?>
        </div>
    </div>
    <div id="slide-1-1" class="slide">
        <div class="slide-content">
            slide1-1
        </div>
    </div>

    <div id="slide-2-0" class="slide">
        <div class="slide-content">
            slide2-0
        </div>
    </div>


</div>
<script  src="js/main.js" type="text/javascript"></script>

</body>
</html>