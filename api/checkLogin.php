<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
session_start();
$pdo= require_once 'config.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_SESSION['isLogin'])&&@$_SESSION['isLogin']===true){
        $res=json_encode(['code'=>200]);
        echo $res;
    }else{
        $res=json_encode(['code'=>401]);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>