-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 09 jun 2022 kl 19:32
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `todolist`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `hej`
--

CREATE TABLE `hej` (
  `id` int(11) DEFAULT NULL,
  `todo` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `hej`
--

INSERT INTO `hej` (`id`, `todo`) VALUES
(NULL, 'hallå');

-- --------------------------------------------------------

--
-- Tabellstruktur `hejsan`
--

CREATE TABLE `hejsan` (
  `id` int(11) DEFAULT NULL,
  `todo` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `kladdkaka`
--

CREATE TABLE `kladdkaka` (
  `id` int(11) DEFAULT NULL,
  `todo` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `kladdkaka`
--

INSERT INTO `kladdkaka` (`id`, `todo`) VALUES
(NULL, 'mjöl');

-- --------------------------------------------------------

--
-- Tabellstruktur `shoppinglist`
--

CREATE TABLE `shoppinglist` (
  `id` int(11) DEFAULT NULL,
  `todo` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `shoppinglist`
--

INSERT INTO `shoppinglist` (`id`, `todo`) VALUES
(NULL, 'milk');

-- --------------------------------------------------------

--
-- Tabellstruktur `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `todo` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `todos`
--

INSERT INTO `todos` (`id`, `todo`) VALUES
(13, 'tvätta'),
(14, 'städa'),
(15, 'träna');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
