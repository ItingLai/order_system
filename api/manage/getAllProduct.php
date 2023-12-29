<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    $sql='SELECT * FROM product';
    $data=[];
    $result=$pdo->prepare($sql);
    if($result->execute($data)){
        $result=$result->fetchAll(PDO::FETCH_ASSOC);
        $results=[];
        foreach ($result as $item){
            $image=$item['image_path']===null?[]:[['name'=>$item['name'].'.'.$item['image_type'],'url'=>$item['image_path']]];
            $tmp=['id'=>$item['id'],'name'=>$item['name'],'price'=>$item['price'],'description'=>$item['description'],'image'=>$image,'isSale'=>$item['isSale']===1?true:false];
            array_push($results,$tmp);
        }
        $res=json_encode(['code'=>200,'data'=>$results]);
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