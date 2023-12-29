<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
date_default_timezone_set('Asia/Taipei');
$pdo=require_once 'config.php';
if($_SERVER['REQUEST_METHOD']==="POST"){
    $response=json_decode(file_get_contents('php://input'),true);
    if(isset($response['name'])&&isset($response['telephone'])&&isset($response['sex'])&&isset($response['feedback'])){
        $sql='INSERT INTO feedback (name,telephone,sex,feedback) VALUES (?,?,?,?)';
        $data=[$response['name'],$response['telephone'],$response['sex'],$response['feedback']];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $res=json_encode(['code'=>200]);
            echo $res;
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