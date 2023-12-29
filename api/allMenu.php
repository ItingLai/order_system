<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once 'config.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    $sql='SELECT id,name,price,1 as count,image_path as image FROM product WHERE isSale=?';
    $data=[1];
    $result=$pdo->prepare($sql);
    if($result->execute($data)){
        $result=$result->fetchAll(PDO::FETCH_ASSOC);
        $res=json_encode(['code'=>200,'data'=>$result]);
        echo $res;
    }else{
        $res=json_encode(['code'=>500,'msg'=>'Error!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>