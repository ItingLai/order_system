<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
date_default_timezone_set('Asia/Taipei');
$pdo=require_once 'config.php';
session_start();
if($_SERVER['REQUEST_METHOD']==="POST"){
    $response=json_decode(file_get_contents('php://input'),true);
    if(isset($response['name'])&&isset($response['telephone'])){
        $start_date=date('Y-m-d', strtotime('-30 day'));
        if(empty($response['orderId'])){
            $sql='SELECT id AS orderId,table_number AS tableNumber,name,telephone,total_price AS totalPrice,status FROM `order` WHERE name=? AND telephone=? AND create_at>=?';
            $data=[$response['name'],$response['telephone'],$start_date];
        }else{
            $sql='SELECT id AS orderId,table_number AS tableNumber,name,telephone,total_price,status AS totalPrice FROM `order` WHERE id=? AND name=? AND telephone=? AND create_at>=?';
            $data=[$response['orderId'],$response['name'],$response['telephone'],$start_date];
        }
        $_SESSION['orderName']=$response['name'];
        $_SESSION['orderTelephone']=$response['telephone'];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $results=[];
            foreach ($result as $item){
                $sql='SELECT name,count FROM order_info WHERE order_id=?';
                $data=[$item['orderId']];
                $product_result=$pdo->prepare($sql);
                if($product_result->execute($data)){
                    $product_result=$product_result->fetchAll(PDO::FETCH_ASSOC);
                    $item['item']=$product_result;
                    array_push($results,$item);
                }else{
                    $res=json_encode(['code'=>500,'msg'=>'Error!']);
                    exit($res);
                }
            }
            $res=json_encode(['code'=>200,'data'=>$results]);
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