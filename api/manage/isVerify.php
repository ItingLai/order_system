<?php
if(!isset($_SESSION['isVerify'])&&@$_SESSION['isVerify']!==true){
    $res=json_encode(['code'=>401,'msg'=>'Not Verify!']);
    exit($res);
}
?>