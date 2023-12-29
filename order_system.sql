-- --------------------------------------------------------
-- 主機:                           127.0.0.1
-- 伺服器版本:                        5.7.33 - MySQL Community Server (GPL)
-- 伺服器作業系統:                      Win64
-- HeidiSQL 版本:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 傾印 order_system 的資料庫結構
CREATE DATABASE IF NOT EXISTS `order_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;
USE `order_system`;

-- 傾印  資料表 order_system.feedback 結構
CREATE TABLE IF NOT EXISTS `feedback` (
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `telephone` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `sex` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `feedback` text COLLATE utf8mb4_bin NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


-- 傾印  資料表 order_system.manage_user 結構
CREATE TABLE IF NOT EXISTS `manage_user` (
  `username` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- 正在傾印表格  order_system.manage_user 的資料：~1 rows (近似值)
/*!40000 ALTER TABLE `manage_user` DISABLE KEYS */;
INSERT INTO `manage_user` (`username`, `password`) VALUES
	('admin1', '$2y$10$ZfEWQItrVppjJVJtS5Kql.3vpXWbs.6CJY1vCBEblqHDvodsrYrYW');
/*!40000 ALTER TABLE `manage_user` ENABLE KEYS */;

-- 傾印  資料表 order_system.order 結構
CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_number` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `telephone` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `remark` text COLLATE utf8mb4_bin NOT NULL,
  `total_price` int(11) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- 傾印  資料表 order_system.product 結構
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `description` text COLLATE utf8mb4_bin,
  `image_path` text COLLATE utf8mb4_bin,
  `image_type` varchar(10) COLLATE utf8mb4_bin DEFAULT NULL,
  `isSale` bigint(20) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


-- 傾印  資料表 order_system.order_info 結構
CREATE TABLE IF NOT EXISTS `order_info` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  KEY `FK_order_info_order` (`order_id`),
  KEY `FK_order_info_product` (`product_id`),
  CONSTRAINT `FK_order_info_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_order_info_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


-- 傾印  資料表 order_system.verify_code 結構
CREATE TABLE IF NOT EXISTS `verify_code` (
  `code` varchar(100) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- 正在傾印表格  order_system.verify_code 的資料：~1 rows (近似值)
/*!40000 ALTER TABLE `verify_code` DISABLE KEYS */;
INSERT INTO `verify_code` (`code`) VALUES
	('$2y$10$qbDt6EcfvMKymea.Z4S5hOZHXbGcgIeKcb9Wz56hTMKP7tdCc0aRy');
/*!40000 ALTER TABLE `verify_code` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
