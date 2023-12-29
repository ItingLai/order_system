<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    $sql='SELECT count(*) as count FROM feedback';
    $result=$pdo->prepare($sql);
    $data=[];
    if($result->execute($data)){
        $result=$result->fetchAll(PDO::FETCH_ASSOC);
        $res=json_encode(['code'=>200,'data'=>['count'=>$result[0]['count']]]);
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