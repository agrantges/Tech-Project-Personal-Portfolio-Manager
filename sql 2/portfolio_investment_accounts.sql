CREATE DATABASE  IF NOT EXISTS `portfolio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `portfolio`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: portfolio
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `investment_accounts`
--

DROP TABLE IF EXISTS `investment_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investment_accounts` (
  `acct_number` varchar(12) NOT NULL,
  `routing_number` varchar(10) NOT NULL,
  `acct_type` varchar(100) NOT NULL,
  `bank` varchar(80) NOT NULL,
  `value` float NOT NULL,
  `date_time` datetime NOT NULL,
  PRIMARY KEY (`acct_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investment_accounts`
--

LOCK TABLES `investment_accounts` WRITE;
/*!40000 ALTER TABLE `investment_accounts` DISABLE KEYS */;
INSERT INTO `investment_accounts` VALUES ('048848783466','56317148','Taxable','Deutsche Bank',38873.5,'2021-08-12 03:42:00'),('197905453456','51248664','IRA 1','Citibank',35299.7,'2021-08-12 03:42:00'),('226199298849','36710807','Roth IRA 2','Deutsche Bank',78633.5,'2021-08-12 06:42:00'),('243484867051','71485340','Jesse Pinkman 401k','Citibank',31599.3,'2021-08-12 06:42:00'),('350906993788','95226224','Lebron James 401k','Citibank',29133.4,'2021-08-12 03:42:00'),('544241368491','66774172','GameStop','Stock Options - GameStop',46704.2,'2021-08-12 12:42:00'),('622031227820','73435676','Taxable','TD Bank',75012.2,'2021-08-12 12:42:00'),('949893871408','95837001','tile','Stock Options - tile',85892.2,'2021-08-12 06:42:00'),('989742139534','62895344','TD Ameritrade Brokerage','TD Ameritrade',76169.2,'2021-08-12 12:42:00');
/*!40000 ALTER TABLE `investment_accounts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-27 11:16:20
