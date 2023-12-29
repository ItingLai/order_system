<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
date_default_timezone_set('Asia/Taipei');
$pdo=require_once 'config.php';
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $response=json_decode(file_get_contents("php://input"),true);
    if(isset($response['cart'])&&isset($response['orderData'])){
        $totalPrice=0;
        foreach ($response['cart'] as $cart){
            $sql='SELECT * FROM product WHERE isSale=? AND id=?';
            $data=[1,$cart['id']];
            $result=$pdo->prepare($sql);
            if($result->execute($data)){
                $result=$result->fetchAll(PDO::FETCH_ASSOC);
                if(count($result)===0){
                    $res=json_encode(['code'=>500,'msg'=>'Product Not Sale!']);
                    exit($res);
                }
                $totalPrice+=$result[0]['price']*$cart['count'];
            }else{
                $res=json_encode(['code'=>500,'msg'=>'Error!']);
                exit($res);
            }
        }
        $sql="INSERT INTO `order` (table_number,name,telephone,remark,total_price) VALUES (?,?,?,?,?)";
        $data=[$response['orderData']['tableNumber'],$response['orderData']['name'],$response['orderData']['telephone'],$response['orderData']['remark'],$totalPrice];
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $lastId=$pdo->lastInsertId();
            foreach ($response['cart'] as $cart){
                $sql='SELECT * FROM product WHERE isSale=? AND id=?';
                $data=[1,$cart['id']];
                $result=$pdo->prepare($sql);
                if($result->execute($data)){
                    $product_result=$result->fetchAll(PDO::FETCH_ASSOC);
                    if(count($product_result)===0){
                        $res=json_encode(['code'=>500,'msg'=>'Product Not Sale!']);
                        exit($res);
                    }
                    $sql='INSERT INTO order_info (order_id,product_id,name,count) VALUES (?,?,?,?)';
                    $data=[$lastId,$cart['id'],$product_result[0]['name'],$cart['count']];
                    $result=$pdo->prepare($sql);
                    if(!$result->execute($data)){
                        $res=json_encode(['code'=>500,'msg'=>'Create Order Error!']);
                        exit($res);
                    }
                }else{
                    $res=json_encode(['code'=>500,'msg'=>'Error!']);
                    exit($res);
                }
            }
            $res_data=['orderId'=>$lastId,'tableNumber'=>$response['orderData']['tableNumber'],'name'=>$response['orderData']['name'],'telephone'=>$response['orderData']['telephone'],'totalPrice'=>$totalPrice];
            $res=json_encode(['code'=>200,'data'=>$res_data]);
            exit($res);
        }else{
            $res=json_encode(['code'=>500,'msg'=>'Create Order Error!']);
            exit($res);
        }
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>