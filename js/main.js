// these variables combine to make the "data structure" that manages the scrolling.
// Could probably throw them all into a single object, but for now this will work.
// Currently you have to define all these, may look into automating that in the future
var column_counter = 0;
var row_counters = [0,0,0,0,0];
var row_maxs = [0,0,3,0,7];
var scrolling_allowed = true;
//var row_colours = ['#FFFFFF','#FFFFFF', '#AFEEEE', '#98FB98','#D3D3D3'];
var row_colours = ['#FFFFFF','#FFFFFF', '#AFEEEE', '#A0FBA0','#D3D3D3'];

//regex mobile check I found on stack exchange, added the small window check myself, may or may not use it
window.mobilecheck = function() {
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check || smallWindowCheck();
}

function smallWindowCheck(){
    if(window.innerWidth <= 800) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function(){
    var is_mobile = window.mobilecheck();
    if(is_mobile){
        $('#mobile-slide').show();
    }else{
        desktopMode();
    }
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

    $('#mobile-slide').hide();
    $('#main-nav-bar-container').show();
    $('#slide-0-0').show();

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

function mobileMode(){
    $('.slide').css({display:'block', position:'relative'});
    $('#mobile-slide').hide();
    $('.mobile-nav-container').show();
}