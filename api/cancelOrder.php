<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
date_default_timezone_set('Asia/Taipei');
$pdo=require_once 'config.php';
session_start();
if($_SERVER['REQUEST_METHOD']==="POST"){
    $response=json_decode(file_get_contents('php://input'),true);
    if(isset($_SESSION['orderName'])&&isset($_SESSION['orderTelephone'])&&isset($response['orderId'])){
        $sql='UPDATE `order` SET status=? WHERE id=?';
        $data=[3,$response['orderId']];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $res=json_encode(['code'=>200]);
            echo $res;
        }else{
            $res=json_encode(['code'=>500,'msg'=>'Error!']);
            echo $res;
        }
    }else{
        $res=json_encode(['code'=>401,'msg'=>'Wrong Operation!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>