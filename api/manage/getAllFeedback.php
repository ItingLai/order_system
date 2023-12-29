<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_GET['page'])){
        $page=$_GET['page']==='1'?0:$_GET['page']*10;
    }else{
        $page=0;
    }
    $sql='SELECT * FROM feedback ORDER BY create_at ASC LIMIT ?,10';
    $result=$pdo->prepare($sql);
    $data=[$page];
    if($result->execute($data)){
        $result=$result->fetchAll(PDO::FETCH_ASSOC);
        $res=json_encode(['code'=>200,'data'=>$result]);
        exit($res);
    }else{
        $res=json_encode(['code'=>500,'msg'=>'Error!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>