<?php
header('Content-type: application/json');
define('Is_allow', true);//授權連線資料庫
$pdo=require_once '../config.php';
session_start();
require_once 'isLogin.php';
if($_SERVER['REQUEST_METHOD']==="POST"){
    if(isset($_POST['option'])){
        switch ($_POST['option']){
            case 'delete':
                if(isset($_POST['productId'])){
                    $sql='SELECT * FROM product WHERE id=?';
                    $data=[$_POST['productId']];
                    $result=sql_process($pdo,$sql,$data);
                    if($result){
                        $result=$result->fetchAll(PDO::FETCH_ASSOC);
                        $img_path=$result[0]['image_path'];
                        if($img_path!==null){
                            if(!remove_image($img_path)){
                                $res=json_encode(['code'=>500,'msg'=>'Delete Image Error!']);
                                exit($res);
                            }
                        }
                    }else{
                        $res=json_encode(['code'=>500,'msg'=>'Error!']);
                        exit($res);
                    }
                    $sql='DELETE FROM product WHERE id=?';
                    $result=sql_process($pdo,$sql,$data);
                    if($result){
                        $res=json_encode(['code'=>200]);
                        exit($res);
                    }else{
                        $res=json_encode(['code'=>500,'msg'=>'Delete Image Error!']);
                        exit($res);
                    }
                }else{
                    $res=json_encode(['code'=>500,'msg'=>'Params missing!']);
                    exit($res);
                }
                break;
            case 'add':
                if(isset($_POST['name'])&&isset($_POST['price'])&&isset($_POST['description'])&&isset($_POST['isSale'])){
                    $sql="INSERT INTO product (name,price,description,isSale) VALUES (?,?,?,?)";
                    $data=[$_POST['name'],$_POST['price'],$_POST['description'],$_POST['isSale']==='true'?1:0];
                    $result=sql_process($pdo,$sql,$data);
                    if($result){
                        $lastId=$pdo->lastInsertId();
                        if(!empty($_FILES['image']['name'])){//有圖片
                            $sql="UPDATE product SET image_path=?,image_type=? WHERE id=?";
                            $image_result=save_image($lastId,$_FILES['image']);
                            if(!$image_result){
                                $res=json_encode(['code'=>500,'msg'=>'Save Image Error!']);
                                exit($res);
                            }
                            $data=[$image_result['image_path'],$image_result['image_type'],$lastId];
                            $result=sql_process($pdo,$sql,$data);
                            if(!$result){
                                $res=json_encode(['code'=>500,'msg'=>'Update Image Error!']);
                                exit($res);
                            }
                        }
                        $sql='SELECT * FROM product WHERE id=?';
                        $data=[$lastId];
                        $result=sql_process($pdo,$sql,$data);
                        if($result){
                            $result=$result->fetchAll(PDO::FETCH_ASSOC);
                            $result=$result[0];
                            $result=['id'=>$result['id'],'name'=>$result['name'],'price'=>$result['price'],'description'=>$result['description'],'image'=>[['name'=>$result['name'].'.'.$result['image_type'],'url'=>$result['image_path']]],'isSale'=>$result['isSale']===1?true:false];
                            $res=json_encode(['code'=>200,'data'=>$result]);
                            echo $res;
                        }else{
                            $res=json_encode(['code'=>500,'msg'=>'Error!']);
                            echo $res;
                        }
                    }else{
                        $res=json_encode(['code'=>500,'msg'=>'Error!']);
                        exit($res);
                    }
                }else{
                    $res=json_encode(['code'=>500,'msg'=>'Params missing!']);
                    exit($res);
                }
                break;
            case 'edit':
                if(isset($_POST['productId'])&&isset($_POST['name'])&&isset($_POST['price'])&&isset($_POST['description'])&&isset($_POST['isSale'])){
                    if(!empty($_FILES['image']['name'])){//有圖片
                        $sql="UPDATE product SET name=?,price=?,description=?,isSale=?,image_path=?,image_type=? WHERE id=?";
                        $image_result=save_image($_POST['productId'],$_FILES['image']);
                        if(!$image_result){
                            $res=json_encode(['code'=>500,'msg'=>'Save Image Error!']);
                            exit($res);
                        }
                        $data=[$_POST['name'],$_POST['price'],$_POST['description'],$_POST['isSale']==='true'?1:0,$image_result['image_path'],$image_result['image_type'],$_POST['productId']];
                    }else{
                        $sql="UPDATE product SET name=?,price=?,description=?,isSale=? WHERE id=?";
                        $data=[$_POST['name'],$_POST['price'],$_POST['description'],$_POST['isSale']==='true'?1:0,$_POST['productId']];
                    }
                    $result=sql_process($pdo,$sql,$data);
                    if($result){
                        $res=json_encode(['code'=>200]);
                        echo $res;
                    }else{
                        $res=json_encode(['code'=>500,'msg'=>'Error!']);
                        echo $res;
                    }
                }else{
                    $res=json_encode(['code'=>500,'msg'=>'Params missing!']);
                    exit($res);
                }
                break;
            default:
                $res=json_encode(['code'=>500,'msg'=>'Option Params Error!']);
                exit($res);
        }

    }else{
        $res=json_encode(['code'=>500,'msg'=>'Option Params Error!']);
        echo $res;
    }
}else{
    $res=json_encode(['code'=>405,'msg'=>'Method Not Allow!']);
    echo $res;
}

function remove_image($img_path){
    $path='../'.substr($img_path,5);
    if(@unlink($path)){
        return true;
    }else{
        return false;
    }
}
function save_image($id,$file){
    $check_type=true;
    $type=null;
    switch ($file["type"]){
        case 'image/jpeg':
            $type= "jpeg" ;
            break;
        case 'image/jpg':
            $type= "jpg" ;
            break;
        case 'image/gif':
            $type= "gif" ;
            break;
        case 'image/png':
            $type= "png" ;
            break;
        default:
            return false;
    }
    $return_image_path='/api/image/'.$id.'.'.$type;
    $save_image_path='../image/'.$id.'.'.$type;
    if(move_uploaded_file($file['tmp_name'],$save_image_path)){
        return ['image_path'=>$return_image_path,'image_type'=>$type];
    }else{
        return false;
    }
}
function sql_process($pdo,$sql,$data){
    $result=$pdo->prepare($sql);
    if($result->execute($data)){
        return $result;
    }else{
        return false;
    }
}
?>