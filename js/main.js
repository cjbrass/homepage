// these variables combine to make the "data structure" that manages the scrolling.
// Could probably throw them all into a single object, but for now this will work.
// Currently you have to define all these, may look into automating that in the future
var column_counter = 0;
var row_counters = [0,0,0,0,0];
var row_maxs = [0,0,3,0,7];
var scrolling_allowed = true;
var row_colours = ['#FFFFFF','#FFFFFF', '#AFEEEE', '#98FB98','#D3D3D3'];

$(document).ready(function(){

    $('#slide-0-0').show();
    desktopMode();

});

function scrollRight(){
    if(row_maxs[column_counter] == 0 || !scrolling_allowed){
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
    if(row_maxs[column_counter] == 0 || !scrolling_allowed){
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

    if(column_counter <= 0 || !scrolling_allowed){
        return;
    }
    column_counter --;

    var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];
    displayArrows();
    changeNav(column_counter);
    changeSlide($(current_slide), $(new_slide), 'up');
}

function scrollDown(){
    var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];

    if(column_counter >= row_counters.length -1 || !scrolling_allowed){
        return;
    }
    column_counter ++;

    var new_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];
    displayArrows();
    changeNav(column_counter);
    changeSlide($(current_slide), $(new_slide), 'down');

}

// this function handles all change of slide actions
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
    scrolling_allowed = false;
    $('.nav-button').addClass('no-hover');
    // set a timeout to allow the animations to finish. during this time, no new scrolling actions may take place
    window.setTimeout(function(){
        scrolling_allowed = true;
        $('.nav-button').removeClass('no-hover');
    }, 1000);
    $current_slide.hide('slide', {direction: direction_hide}, 1000);
    $new_slide.show('slide', {direction: direction_show}, 1000);
}

function changeNav(column_num){
    $('.nav-button').removeClass('active');
    $('.nav-button[data-panel-num="'+column_num+'"]').addClass('active');
    changeBackground(column_num);
}

function changeBackground(column_num){
    var color = row_colours[column_num];
    $('body').animate({backgroundColor: color}, 1000);
}

// if a row has multiple options, we want to show a left and right arrow. Otherwise, we do not want them visible
function displayArrows(){
    if(row_maxs[column_counter] == 0){
        $('#left-arrow').hide();
        $('#right-arrow').hide();
    }else{
        $('#left-arrow').show();
        $('#right-arrow').show();
    }
}

function desktopMode(){

    $('#right-arrow').click(function(){
        scrollRight();
    });

    $('#left-arrow').click(function(){
        scrollLeft();
    });

    // the nav bar at the top gives us the option to skip to any row
    $('.nav-button').click(function(){
        var $this = $(this);
        var next_slide_column = $this.data('panelNum');
        // make sure that the new slide column is not the current slide, that the previous action has finished,
        // and (just in case the user tried to modify the html) that it is a valid row number
        if(next_slide_column < 0 || next_slide_column >= row_counters.length || next_slide_column == column_counter || !scrolling_allowed){
            return;
        }

        var current_slide = '#slide-' + column_counter + "-"+row_counters[column_counter];
        var new_slide = '#slide-' + next_slide_column + "-"+row_counters[next_slide_column];
        var direction = 'up';
        if(column_counter < next_slide_column) {
            direction = 'down';
        }
        column_counter = next_slide_column;
        displayArrows();
        changeNav(next_slide_column);
        changeSlide($(current_slide), $(new_slide), direction);
    });

    var sports_list = ['football', 'basketball', 'soccer', 'volleyball','baseball', 'cricket', 'ping-pong', 'cliff diving', 'Mongolian leg wrestling'];
    var sports_index = 0;
    $('#sports').click(function(){
        $(this).text(sports_list[sports_index]);
        sports_index ++;
        if(sports_index >= sports_list.length){
            sports_index = 0;
        }
    });
    $('body').bind('touchmove', function(e) {
        console.log('window height: '+$(window).height());
        console.log('scroll top: '+$(this).scrollTop()); // Replace this with your code.
        console.log('current height' + $(this).height());
    });

    // on wheel up and wheel down events, we want to scroll up/down
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            scrollUp();
        }
        else {
            scrollDown();
        }
    });

    // want the user to be able to change slides with the arrow keys
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
}