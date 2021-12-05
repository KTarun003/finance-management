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

USE `finance`;

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
                        `id` varchar(450) NOT NULL,
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
                              `loan_id`  varchar(450) NOT NULL,
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
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profit`
--
ALTER TABLE `profit`
    ADD PRIMARY KEY (`date`);

--
-- Indexes for table `recoveries`
--
ALTER TABLE `recoveries`
    ADD PRIMARY KEY (`loan_id`,`date`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recoveries`
--
ALTER TABLE `recoveries`
    ADD CONSTRAINT `FK` FOREIGN KEY (`loan_id`) REFERENCES `loan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
