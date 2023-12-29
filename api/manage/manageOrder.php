<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $response=json_decode(file_get_contents('php://input'),true);
    if(isset($response['option'])&&isset($response['orderId'])){
        switch ($response['option']){
            case 'cancel':
                $type=3;
                break;
            case 'accept':
                $type=1;
                break;
            case 'end':
                $type=2;
                break;
            default:
                $res=json_encode(['code'=>500,'msg'=>'Option Error!']);
                exit($res);
        }
        $sql='UPDATE `order` SET status=? WHERE id=?';
        $data=[$type,$response['orderId']];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $res=json_encode(['code'=>200]);
            exit($res);
        }else{
            $res=json_encode(['code'=>500,'msg'=>'Error!']);
            exit($res);
        }
    }else{
        $res=json_encode(['code'=>500,'msg'=>'Params missing!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>