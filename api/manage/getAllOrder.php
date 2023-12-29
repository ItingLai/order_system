<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
date_default_timezone_set('Asia/Taipei');
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_GET['category'])){
        $start_date=date('Y-m-d', strtotime('-30 day'));
        switch ($_GET['category']){
            case 'all':
                $sql='SELECT id AS orderId,create_at AS date,name,table_number AS tableNumber,telephone,remark,total_price AS totalPrice,`status` FROM `order` WHERE create_at>=?';
                $data=[$start_date];
                break;
            case 'wait':
                $sql='SELECT id AS orderId,create_at AS date,name,table_number AS tableNumber,telephone,remark,total_price AS totalPrice,`status` FROM `order` WHERE create_at>=? AND status=?';
                $data=[$start_date,0];
                break;
            case 'accept':
                $sql='SELECT id AS orderId,create_at AS date,name,table_number AS tableNumber,telephone,remark,total_price AS totalPrice,`status` FROM `order` WHERE create_at>=? AND status=?';
                $data=[$start_date,1];
                break;
            case 'end':
                $sql='SELECT id AS orderId,create_at AS date,name,table_number AS tableNumber,telephone,remark,total_price AS totalPrice,`status` FROM `order` WHERE create_at>=? AND status=?';
                $data=[$start_date,2];
                break;
            case 'cancel':
                $sql='SELECT id AS orderId,create_at AS date,name,table_number AS tableNumber,telephone,remark,total_price AS totalPrice,`status` FROM `order` WHERE create_at>=? AND status=?';
                $data=[$start_date,3];
                break;
            default:
                $res=json_encode(['code'=>500,'msg'=>'Params Error!']);
                exit($res);
        }
        $result=$pdo->prepare($sql);
        if($result->execute($data)){
            $result=$result->fetchAll(PDO::FETCH_ASSOC);
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