<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
require_once 'isVerify.php';
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_GET['type'])&&isset($_GET['day'])){
        $sql='SELECT `product`.name,SUM(order_info.count) AS count,SUM(`product`.price*order_info.count) AS totalPrice  FROM `product` 
                LEFT JOIN order_info ON order_info.product_id=`product`.id 
                INNER JOIN `order` ON  `order_info`.order_id=`order`.id WHERE create_at>=? AND create_at<=? AND status=? GROUP BY `product`.id';
        if($_GET['type']==='month'){
            $start_date=date('Y-m-01',strtotime($_GET['day']));
            $end_date = date("Y-m-t",strtotime($start_date));
            $data=[$start_date,$end_date,2];
        }else{
            $start_date=$_GET['day'];
            $end_date = date('Y-m-d',strtotime('+1 day',strtotime($_GET['day'])));
            $data=[$start_date,$end_date,2];
        }
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
        $res=json_encode(['code'=>500,'msg'=>'Params missing!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}
?>
