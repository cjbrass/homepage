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
    <div id="slide-0-1" class="slide">

        <div class="slide-content">
            slide0-1
        </div>
    </div>
    <div id="slide-0-2" class="slide">
        <div class="slide-content">
            slide0-2
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

<script>
    var column_counter = 0;
    var row_counters = [0,0,0];
    var row_maxs = [2,1,0];
    var row_colours = ['#ffffff', '#ff0000', '#00ff00'];

    $(document).ready(function(){

        $('#slide-0-0').show();

        $('#right-arrow').click(function(){
            scrollRight();
        });

        $('#left-arrow').click(function(){
            scrollLeft();
        });

        $(window).bind('mousewheel DOMMouseScroll', function(event){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                scrollUp();
            }
            else {
                scrollDown();
            }
        });

        $(document).keydown(function(e){
            switch(e.which) {
                case 37: // left
                    scrollLeft();
                    break;

                case 38: // up
                    scrollUp();
                    break;

                case 39: // right
                    scrollRight();
                    break;

                case 40: // down
                    scrollDown();
                    break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });

    });

    function scrollRight(){
        if(row_maxs[column_counter] == 0){
            return;
        }

        var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        row_counters[column_counter] ++;
        if(row_counters[column_counter] > row_maxs[column_counter]){
            row_counters[column_counter] = 0;
        }

        var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        changeSlide($(current_slide), $(new_slide), 'right');
    }

    function scrollLeft(){
        if(row_maxs[column_counter] == 0){
            return;
        }

        var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        row_counters[column_counter] --;
        if(row_counters[column_counter] < 0){
            row_counters[column_counter] = row_maxs[column_counter];
        }

        var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        changeSlide($(current_slide), $(new_slide), 'left');
    }

    function scrollUp(){
        var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        if(column_counter <= 0){
            return;
        }
        column_counter --;

        var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];
        displayArrows();
        changeSlide($(current_slide), $(new_slide), 'up');
    }

    function scrollDown(){
        var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

        if(column_counter >= row_counters.length -1 ){
            return;
        }
        column_counter ++;

        var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];
        displayArrows();
        changeSlide($(current_slide), $(new_slide), 'down');

    }

    function changeSlide($current_slide, $new_slide, direction_show){
        var direction_hide;
        switch (direction_show){
            case 'down':
                direction_hide = 'up';
                break;
            case 'up':
                direction_hide = 'down';
                break;
            case 'left':
                direction_hide = 'right';
                break;
            case 'right':
                direction_hide = 'left';
                break;
        }

        $current_slide.hide('slide', {direction: direction_hide}, 1000);
        $new_slide.show('slide', {direction: direction_show}, 1000);
    }

    function displayArrows(){
        if(row_maxs[column_counter] == 0){
            $('#left-arrow').hide();
            $('#right-arrow').hide();
        }else{
            $('#left-arrow').show();
            $('#right-arrow').show();
        }
    }
</script>

</body>
</html>