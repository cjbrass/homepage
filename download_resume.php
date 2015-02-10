<?php
/**
 * Created by PhpStorm.
 * User: CJ
 * Date: 2015-02-10
 * Time: 12:59 PM
 */

$file_name = 'CJ_Brassington_Resume_full.pdf';
if(isset($_GET['type']) && $_GET['type'] == 'short'){
    $file_name = 'CJ_Brassington_Resume_short.pdf';
}

$export_name = 'CJ_Brassington_Resume.pdf';

header("Content-type:application/pdf");

header("Content-Disposition:attachment;filename='$export_name'");
readfile($file_name);