<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="POST"){
    $response=json_decode(file_get_contents('php://input'),true);
    if(isset($response['verifyCode'])){
        $sql='SELECT * FROM verify_code';
        $data=[];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $result=$result->fetchAll(PDO::FETCH_ASSOC);
            if(password_verify($response['verifyCode'],$result[0]['code'])){
                $_SESSION['isVerify']=true;
                $res=json_encode(['code'=>200]);
                echo $res;
            }else{
                $res=json_encode(['code'=>401,'msg'=>'Wrong Code!']);
                echo $res;
            }
        }else{
            $res=json_encode(['code'=>500,'msg'=>'Error!']);
            echo $res;
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