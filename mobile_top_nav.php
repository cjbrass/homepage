<?php
/**
 * Created by PhpStorm.
 * User: CJ
 * Date: 2/4/15
 * Time: 10:03 PM
 */
?>
<div class="mobile-nav-container">
    <div class="nav-bar">
        <div class="nav">
            <a href="#slide-0-0" class="nav-button <?= $slide == 0 ? 'active' : ''?>" data-panel-num="0">Welcome</a>
            <a href="#slide-1-0" class="nav-button <?= $slide == 1 ? 'active' : ''?>" data-panel-num="1">Home</a>
            <a href="#slide-2-0" class="nav-button <?= $slide == 2 ? 'active' : ''?>" data-panel-num="2">Work</a>
            <a href="#slide-3-0" class="nav-button <?= $slide == 3 ? 'active' : ''?>" data-panel-num="3">Projects</a>
            <a href="#slide-4-0" class="nav-button <?= $slide == 4 ? 'active' : ''?>" data-panel-num="4">About</a>
        </div>
        <div class="bottom-slant"></div>
    </div>
</div>
