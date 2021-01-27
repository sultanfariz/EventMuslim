-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2021 at 12:55 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventmuslim`
--

-- --------------------------------------------------------

--
-- Table structure for table `acara`
--

CREATE TABLE `acara` (
  `id` int(11) NOT NULL,
  `fk_id_organizer` int(11) DEFAULT NULL,
  `nama_acara` varchar(255) DEFAULT NULL,
  `lokasi` varchar(255) DEFAULT NULL,
  `harga` bigint(20) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `tag_acara` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(1024) DEFAULT NULL,
  `foto_cover` varchar(255) DEFAULT NULL,
  `no_rek_organizer` varchar(255) DEFAULT NULL,
  `bank_rek_organizer` varchar(255) DEFAULT NULL,
  `status_acara` tinyint(1) DEFAULT NULL,
  `verifikasi_acara` tinyint(1) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `acara`
--

INSERT INTO `acara` (`id`, `fk_id_organizer`, `nama_acara`, `lokasi`, `harga`, `tanggal`, `tag_acara`, `deskripsi`, `foto_cover`, `no_rek_organizer`, `bank_rek_organizer`, `status_acara`, `verifikasi_acara`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Muslim Hackfest', 'Online', 0, '2021-01-31 13:00:00', 'Lomba', 'Muslim Hackfest merupakan festival dan hackathon muslim virtual pertama di Indonesia.\r\n\r\nTerdapat tiga mata acara dalam Muslim Hackfest yaitu 1) Open Source Online Discussion membahas project keumatan yang open source sehingga dapat dikembangkan secara kolaborasi (10 Jan 2021)[daftar], 2) Hackathon ajang inovasi dan pembuatan solusi digital untuk permasalahan umat Islam di Indonesia (23-31 Jan 2021) dan 3) Grand Webinar dengan tema Kolaborasi Teknologi Untuk Kemaslahatan Umat (23, 24 & 31 Jan 2021). Mari menjalin relasi, berkolaborasi dan berlomba dalam kebaikan dengan para inovator muslim dari seluruh Indonesia dengan mengikuti Hackathon Muslim Hackfest. Dapatkan juga inspirasi dan bekal untuk mengoptimalkan kebermanfaatan dari pemateri nasional dan internasional dalam rangkaian sesi Grand Webinar.\r\n\r\nAcara ini terbuka untuk umum dan GRATIS!. Daftar sekarang dan sebarkan kabar baik ini ke sahabat muslim lainnya!\r\n\r\nDiselenggarakan oleh OpenUmma, serta didukung oleh Kahf dan Rumah Amal Salman.\r\n\r\n', NULL, '123456789123456', 'BRI', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Kuliner Halal Fest', 'Jl. Gatot Subroto No.1, RT.1/RW.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270', 20000, '2021-01-25 00:00:00', 'Festival', 'The Center for Indonesian Policy Studies (CIPS) is hosting a Gala Dinner exclusively for CIPS supporters. Here, you will meet others equally dedicated in supporting and driving efforts to see Indonesians build better futures and live prosperous lives.\r\n\r\nThe Gala will be held on 14 September in Jakarta, is about “Affordable Food for the Poor”. CIPS is actively promoting sustainable food security in Indonesia to improve poor families’ access to affordable quality food. As a result, one in three Indonesian children under the age of 5 suffer from malnutrition and stunted growth. The negative impact on these children’s futures is irreversible.', NULL, '123567899123789', 'BNI', 0, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Pemuda Muslim Produktif dan Kontributif', 'Online', 0, '2021-01-23 07:30:00', 'Seminar', 'Pada sesi ini Ustadz Elvandi akan membahas mengenai :\r\n\r\nVisi global Islam\r\nSistem nilai Islam dan kaitannya dengan produk teknologi\r\nMerencanakan kontribusi sebagai muslim di bidang teknologi\r\n', NULL, '378978931224567', 'BCA', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 3, 'STUDI KASUS AKAD MUDHARABAH\r\n', 'Masjid Al-Hurriyyah IPB, Dramaga, Bogor', 30000, '2021-02-10 16:00:00', 'Kajian', NULL, NULL, '79783124234231', 'BNI Syariah', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 5, 'Kajian Penyejuk Qalbu', 'Masjid Al-Hurriyyah IPB, Dramaga, Bogor', 30000, '2021-01-27 09:00:00', 'Kajian', 'Kegiatan ini adalah kegiatan kajian Islami dengan mengangkat materi keislaman yang update disesuaikan dengan kebutuhan civitas akademika di Fakultas Peternakan IPB. Kegiatan ini terbagi menjadi 2 sesi acara yakni pengajian materi adalah sesi dimana pembicara membawakan tema materi secara menyeluruh dan sesi kedua yaitu sesi diskusi dimana dalam sesi ini peserta dipersilakan menanyakan berkaitan tentang tema yang dibahas tersebut', NULL, '987798987783213', 'BNI Syariah', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `organizer`
--

CREATE TABLE `organizer` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nama_organizer` varchar(255) DEFAULT NULL,
  `nomor_hp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organizer`
--

INSERT INTO `organizer` (`id`, `email`, `nama_organizer`, `nomor_hp`, `password`, `instagram`, `facebook`, `whatsapp`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'muslimhackfest@openumma.org', 'MuslimHackfest Organizer', '081262138433', 'muslimhackfest', 'muslimhackfest', 'muslimhackfest', '081262138433', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `fk_id_acara` int(11) DEFAULT NULL,
  `nama_pembeli` varchar(255) DEFAULT NULL,
  `email_pembeli` varchar(255) DEFAULT NULL,
  `nomor_hp_pembeli` varchar(255) DEFAULT NULL,
  `tanggal_pembelian` datetime DEFAULT NULL,
  `total_pembelian` bigint(20) DEFAULT NULL,
  `infaq` bigint(20) DEFAULT NULL,
  `fee` bigint(20) DEFAULT NULL,
  `verifikasi_midtrans` tinyint(1) DEFAULT NULL,
  `state` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `order_id`, `fk_id_acara`, `nama_pembeli`, `email_pembeli`, `nomor_hp_pembeli`, `tanggal_pembelian`, `total_pembelian`, `infaq`, `fee`, `verifikasi_midtrans`, `state`, `createdAt`, `updatedAt`) VALUES
(1, 'order-id-node-1611676007', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:46:47', '2021-01-26 15:46:47'),
(2, 'order-id-node-1611676335', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:15', '2021-01-26 15:52:15'),
(3, 'order-id-node-1611676341', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:21', '2021-01-26 15:52:21'),
(4, 'order-id-node-1611676344', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:24', '2021-01-26 15:52:24'),
(5, 'order-id-node-1611676349', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:29', '2021-01-26 15:52:29'),
(6, 'order-id-node-1611676354', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:34', '2021-01-26 15:52:34'),
(7, 'order-id-node-1611676365', 8, 'Ihsan Firdaus', 'ihsanfirdaus16@gmail.com', '085612349876', NULL, 11200, 0, 1200, NULL, 0, '2021-01-26 15:52:45', '2021-01-26 15:52:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acara`
--
ALTER TABLE `acara`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizer`
--
ALTER TABLE `organizer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acara`
--
ALTER TABLE `acara`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `organizer`
--
ALTER TABLE `organizer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
