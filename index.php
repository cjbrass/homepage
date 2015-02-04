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
    <meta name="viewport" content="width=device-width, user-scalable=yes" />

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
            <span class="nav-button active" data-panel-num="0">Welcome</span>
            <span class="nav-button" data-panel-num="1">Home</span>
            <span class="nav-button" data-panel-num="2">Work</span>
            <span class="nav-button" data-panel-num="3">Projects</span>
            <span class="nav-button" data-panel-num="4">About</span>
        </div>
        <div id="bottom-slant"></div>
    </div>

</div>
<div id="right-arrow" class="arrow"></div>
<div id="left-arrow" class="arrow"></div>

<div style=" position: relative; width: 100%; min-height: 100vh;">
    <div id="mobile-slide" class="slide">
        <div class="slide-content">

            <div style="text-align: center">
                <p>
                    Noticed you are using a smaller screen, possibly on a mobile device. Would you like to view this as the desktop version, or mobile version?
                </p>
                <p style="margin-top: 30px; margin-bottom: 30px;">
                    <span id="mobile-button" onclick="mobileMode()">Mobile</span> <span id="desktop-button" onclick="desktopMode()">Desktop</span>
                </p>
                <p>
                    This page is best viewed on desktops (or at least tablets), however it should still work on mobile platforms.
                    The mobile option will just layout the whole page and you can scroll through it.
                    The Desktop version will behave as normal, however due to the smaller screen size and use of touchscreens, all the features may not work as intended.
                    If you want to change what version you see, you can always just refresh the page
                </p>


            </div>
        </div>
    </div>

    <div id="slide-0-0" class="slide">
        <div class="slide-shader"></div>
        <div class="slide-content">
        </div>
    </div>

    <div id="slide-1-0" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                Hey! You found my website.
            </p>

            <p>My name is CJ, and I'm a full stack developer who decided I should probably make a website of my own.
                I've put together what I hope is an engaging portfolio to give you an idea of what I am all about. From my
                projects, to my work experience, to my odd hobbies, I'll try to shine a little light on how I fill my days.
                This site has no particular focus. I want to display what I do professionally, while also showing a bit of my personality, and just have some fun with it.

            </p>

            <ul>
                Here is a quick overview of what you can find:
                <li>Work: A short summary of some of my job work experience, including projects worked on, and technologies used.</li>
                <li>Sandbox: A list of personal projects I've worked on recently, usually with accompanying github links.</li>
                <li>About: I'm awesome, and this is how I can further inform you about this. You can find a little bio, as well as my resume and contact info here.</li>
            </ul>

            <p>
                Just a reminder: this site is still under construction, so do not be
                the least bit surprised when links/pages do not work.
                That being said, it will never be "finished", so go ahead and explore. If you break things, I promise I won't get mad.
                You can navigate the site with your arrow keys,
                your scroll wheel, or the menu at the top.
            </p>

        </div>
    </div>



    <div id="slide-2-0" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                Work Experience
            </p>
            <p>
                I am a developer with most of my experience in web development. I graduated from UBC in 2013 with a
                combined major in Computer Science and Physics. I got my first (developer) job in the fall of 2013, and
                have been working as a web dev since. I am comfortable in the full stack, though the backend is where I am most
                at home.
            </p>
            <p>
                While I am familiar with C, C++, java, and python (to name a few) from my time at UBC, I have by far the most experience
                working with PHP, MySQL, and javascript. I also have worked a lot with basic html, and css. Learning new
                programing languages has never been an issue for me, and I tend to enjoy working with new languages.
            </p>
            <p>
                I have a more detailed breakdown of my previous jobs in other slides on this page.
                The arrows to the left and right will bring them up
            </p>
        </div>
    </div>
    <div id="slide-2-1" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                Sentis Research
            </p>

        </div>
    </div>
    <div id="slide-2-2" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                Stage 3
            </p>

        </div>
    </div>
    <div id="slide-2-3" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                University of British Columbia
            </p>

        </div>
    </div>
    <div id="slide-3-0" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                Personal Projects
            </p>
            <p>
                When I have the time I work on personal projects. These can vary from little 1-2 hours of tinkering with code to projects spanning several days/weeks.
                You can find links to the github repositories here, and sometimes a working version.
            </p>
            <p>
                <a href="https://github.com/cjbrass/Sandbox">The Sandbox</a> This is where I will do my best to place my waste of time projects. Things
                like best practices and coding standards will rarely be followed, and the projects will likely never be polished, if ever finished.
            </p>
            <p>
                <a href="https://github.com/cjbrass/homepage">This page</a> Want to see what is under the hood for this page? Technically you already have access to everything,
                since its all client side, but hey, here is a nice repo link for you.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=NhHrw-t3mwk">Sound finding car</a> and
                <a href="https://www.youtube.com/watch?v=lNB6J7EirZc">a wave animator</a>
                A few of my more memorable projects from university.
                The source code for them is either lost, or far too trivial to be worth posting, but the results are interesting.


            </p>
        </div>
    </div>
    <div id="slide-4-0" class="slide">
        <div class="slide-content">
            <p class="sub-title">
                About Me
            </p>
            <p>
                The work experience section hopefully shed some light on some of the finer details of that aspect of my life.
                This section is more about a quick guide to CJ. Besides programming, I am a big sports fan, and a bit of nerd. I will pick up
                just about any sport, though the footballs have been my favorite (American, Canadian, and Australian football that is).
                I also enjoy video games when I have the time, as well as playing board/card games poorly, yet extremely competitively.

            </p>
            <p>

            </p>
        </div>
    </div>
    <div id="slide-4-1" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/football.jpg">
            </div>
            <p>
                I played a lot of sports in highschool, but my favorite was easily football. I was lucky enough to have the
                grades and ability to keep playing in university. To this day, the most likely place to find me on a weekend
                during football season is in front of a TV watching a game.
            </p>
        </div>
    </div>
    <div id="slide-4-2" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/footy.jpg">
            </div>
            <p>
                Aussie Rules Football (AFL) is a ridiculous game that makes no sense. But it sure is fun to play. It is also my new
                sport of choice. While I still play lots of <span id="sports">[insert sport here]</span>, AFL is the only
                orginized/non-pickup game for me right now.
            </p>
        </div>
    </div>
    <div id="slide-4-3" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/monkey_fight.jpg">
            </div>
            <p>
                Fighting a potentially diseased monkey for a mere water bottle is kinda stupid (even in 35 degrees and 100% humidity).
                I eventually realized the smartest thing I could do was to give it up. As much as I dislike making poor decisions,
                it is quite satisfying when I recognize something is wrong, and fix it.
            </p>
        </div>
    </div>
    <div id="slide-4-4" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/cj_smash.jpg">
            </div>
            <p>
                I'm guilty of taking the occasional goofy photo (as anyone who has me on facebook can attest to). I've always enjoyed
                trying out different things to see how they end up looking. This is often my approach when given free reign on a design.
                Try something new out, see how it looks, and worst case I can roll back to something more conservative.
            </p>
        </div>
    </div>
    <div id="slide-4-5" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/why_not.jpg">
            </div>
            <p>
                A lot of my adult life has been finding the balance between "why not?" and "probably shouldn't". Putting a spider the size of my head
                onto my face was probably closer to the later. Nevertheless, it is something I live by: take some risks, but try not to do anything too stupid.
                And it has helped me do some pretty awesome things I likely never would have tried (like travel, and getting a computer science degree)!
            </p>
        </div>
    </div>
    <div id="slide-4-6" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/camping.jpg">
            </div>
            <p>
                I love camping, but maybe not for the usual reasons. Being outside, being free, etc. are all nice.
                But the physics/astronomy side of me loves a non-light-polluted sky. I could spend hours just staring up.
            </p>
        </div>
    </div>
    <div id="slide-4-7" class="slide">
        <div class="slide-content">
            <div class="about-image-container">
                <img class="about-image" src="images/about/work.jpg">
            </div>
            <p>
                This is my 9-5 face. While I find what I do interesting, I understand that pictures of it may not be so enthralling.
                So this is me at work. Smile on my face, trying to solve problems, and somehow getting paid to do it.
            </p>
        </div>
    </div>


</div>
<script  src="js/main.js" type="text/javascript"></script>

</body>
</html>

