-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2020 at 09:02 AM
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
CREATE DATABASE IF NOT EXISTS `finance` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `finance`;

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

--
-- Dumping data for table `analytics`
--

INSERT INTO `analytics` (`month`, `year`, `principle`, `interest`, `p_percent`, `i_percent`) VALUES
(3, 2020, 12000, 3000, 0, 0),
(4, 2020, 15000, 3600, 25, 20);

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
  `status` int(10) DEFAULT 3,
  `period` varchar(10) DEFAULT (to_days(`rdate`) - to_days(`idate`)),
  `penalty` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loan`
--

INSERT INTO `loan` (`name`, `phone`, `address`, `asset`, `principle`, `rate`, `idate`, `rdate`, `interest`, `status`, `period`, `penalty`) VALUES
('Jagdeesh', '9876543210', 'Lingampally', 'Self', 15000, 20, '2020-03-28', '2020-04-08', 3000, 3, '3', 0),
('Sravan', '9876543210', 'KPHB', 'Laptop', 12000, 30, '2020-04-01', '2020-04-08', 3600, 2, '29', 0),
('Tarun', '8008582508', 'E-709 NCL SINDHU', 'phone', 5000, 20, '2020-03-29', '2020-05-09', 1000, 0, '31', 0),
('Tirupathi', '0123456789', 'Kompally', 'Self', 15000, 30, '2020-03-28', '2020-04-08', 4500, 0, '1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `profit`
--

DROP TABLE IF EXISTS `profit`;
CREATE TABLE `profit` (
  `date` date NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profit`
--

INSERT INTO `profit` (`date`, `amount`) VALUES
('2020-04-07', 15000),
('2020-04-08', 20000),
('2020-04-09', 16000);

-- --------------------------------------------------------

--
-- Table structure for table `recoveries`
--

DROP TABLE IF EXISTS `recoveries`;
CREATE TABLE `recoveries` (
  `name` varchar(30) NOT NULL,
  `amount` float NOT NULL,
  `date` date NOT NULL,
  `type` varchar(45) NOT NULL,
  `Weekly` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recoveries`
--

INSERT INTO `recoveries` (`name`, `amount`, `date`, `type`, `Weekly`) VALUES
('Tarun', 1000, '2020-03-29', 'Interest', 'No'),
('Tarun', 6000, '2020-04-10', 'Whole', 'No');

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
