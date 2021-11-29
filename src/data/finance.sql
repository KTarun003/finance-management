-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2020 at 02:42 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finance`
--

USE `id12822678_finance`;

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `analyse`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `analyse` ()  BEGIN
	declare Pinterest,Pprinciple,Cinterest,Cprinciple,Iperc,Pperc float;
    select interest,principle into Pinterest,Pprinciple from analytics where `month` = (month(CURRENT_DATE())-1) AND `year` = YEAR(CURRENT_DATE());
    select sum(principle),sum(interest) into Cprinciple,Cinterest from recoveries where MONTH(`date`) = MONTH(CURRENT_DATE);
    set Iperc = ((Cinterest - Pinterest)/Pinterest)*100;
    set Pperc = ((Cprinciple - Pprinciple)/Pprinciple)*100;
    if((select exists(select * from analytics where month = month(CURRENT_DATE()) AND year = YEAR(CURRENT_DATE))) = 0) then
		insert into analytics values(month(current_date()),year(current_date()),Cprinciple,Cinterest,Pperc,Iperc);
	
    else
		update analytics set principle = Cprinciple,interest = Cinterest , p_percent = Pperc , i_percent = Iperc where `month` = (month(CURRENT_DATE())) AND `year` = YEAR(CURRENT_DATE());
    end if;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `analytics`
--

DROP TABLE IF EXISTS `analytics`;
CREATE TABLE `analytics` (
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `principle` float NOT NULL,
  `interest` float NOT NULL,
  `p_percent` float NOT NULL,
  `i_percent` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
CREATE TABLE `loan` (
  `name` varchar(30) NOT NULL,
  `phone` char(10) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `asset` varchar(30) DEFAULT NULL,
  `principle` float NOT NULL,
  `rate` float NOT NULL,
  `idate` date NOT NULL,
  `rdate` date NOT NULL,
  `interest` float NOT NULL,
  `amount` float NOT NULL,
  `status` int(10) DEFAULT 3,
  `times` int(11) NOT NULL DEFAULT 0,
  `period` varchar(10) DEFAULT (to_days(`rdate`) - to_days(`idate`)),
  `penalty` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `profit`
--

DROP TABLE IF EXISTS `profit`;
CREATE TABLE `profit` (
  `date` date NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `recoveries`
--

DROP TABLE IF EXISTS `recoveries`;
CREATE TABLE `recoveries` (
  `name` varchar(30) NOT NULL,
  `principle` float NOT NULL,
  `date` date NOT NULL,
  `interest` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `analytics`
--
ALTER TABLE `analytics`
  ADD PRIMARY KEY (`month`,`year`);

--
-- Indexes for table `loan`
--
ALTER TABLE `loan`
  ADD PRIMARY KEY (`name`,`idate`);

--
-- Indexes for table `profit`
--
ALTER TABLE `profit`
  ADD PRIMARY KEY (`date`);

--
-- Indexes for table `recoveries`
--
ALTER TABLE `recoveries`
  ADD PRIMARY KEY (`name`,`date`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recoveries`
--
ALTER TABLE `recoveries`
  ADD CONSTRAINT `FK` FOREIGN KEY (`name`) REFERENCES `loan` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
