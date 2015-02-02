var column_counter = 0;
var row_counters = [0,0,0];
var row_maxs = [2,1,0];
var scrolling_allowed = true;
var row_colours = ['#ffffff', '#ff0000', '#00ff00'];

$(document).ready(function(){

    $('#slide-0-0').show();

    $('#right-arrow').click(function(){
        scrollRight();
    });

    $('#left-arrow').click(function(){
        scrollLeft();
    });

    $('.nav-button').click(function(){
        var $this = $(this);
        var next_slide_column = $this.data('panelNum');
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
        $('.nav-button').removeClass('active');
        $this.addClass('active');
        changeSlide($(current_slide), $(new_slide), direction);
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
    scrolling_allowed = false;
    $('.nav-button').addClass('no-hover');
    window.setTimeout(function(){
        scrolling_allowed = true;
        $('.nav-button').removeClass('no-hover');
    }, 1000);
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