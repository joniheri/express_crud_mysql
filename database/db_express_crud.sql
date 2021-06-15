-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jun 2021 pada 05.59
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_express_crud`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `ktps`
--

CREATE TABLE `ktps` (
  `id` int(11) NOT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `jenisKelamin` varchar(255) DEFAULT NULL,
  `tglLahir` datetime DEFAULT NULL,
  `golDarah` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `ktps`
--

INSERT INTO `ktps` (`id`, `nik`, `alamat`, `jenisKelamin`, `tglLahir`, `golDarah`, `idUser`, `createdAt`, `updatedAt`) VALUES
(1, '1301010100013', 'Tanggerang Selatan', 'Laki-laki', '2021-06-14 03:21:45', 'AB', 1, '2021-06-14 03:21:45', '2021-06-14 03:21:45'),
(2, '13010100014', 'Depok', 'Perempuan', '2021-06-14 03:23:06', 'O', 2, '2021-06-14 03:23:06', '2021-06-14 03:23:06'),
(3, '1313000000111', 'Pesisir Selatan', 'Laki-laki', '2021-06-14 03:24:12', 'B', 1, '2021-06-14 03:24:12', '2021-06-14 03:24:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nameImg` varchar(255) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `nameImg`, `desc`, `price`, `idUser`, `createdAt`, `updatedAt`) VALUES
(1, 'product1.jpg', 'Laptop Ausu Core i7 gen9', 9000000, 1, '2021-06-14 05:32:09', '2021-06-14 05:32:09'),
(2, 'product2.png', 'iPhone 12', 24000000, 1, '2021-06-14 05:32:09', '2021-06-14 05:32:09'),
(3, 'product2.jpg', 'Xiaomi Smartwatch Gen10', 2400000, 2, '2021-06-14 05:35:04', '2021-06-14 05:35:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210611224414-create-tb-test.js'),
('20210613194824-create-user.js'),
('20210613200459-create-ktp.js'),
('20210613221957-create-product.js'),
('20210613233635-create-transaction.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_tests`
--

CREATE TABLE `tb_tests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_tests`
--

INSERT INTO `tb_tests` (`id`, `name`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Baru 2', 'asdfasdfsd@email.com', '2021-06-13 19:58:24', '2021-06-13 19:58:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idProduct` int(11) DEFAULT NULL,
  `idPenjual` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `idUser`, `idProduct`, `idPenjual`, `harga`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 9000000, '2021-06-14 07:00:57', '2021-06-14 07:00:57'),
(2, 1, 2, 3, 24000000, '2021-06-14 07:00:57', '2021-06-14 07:00:57');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `bio`, `createdAt`, `updatedAt`) VALUES
(1, 'baru2', 'baru2@email.com', '123456', 'Bio bontoh 1', '2021-06-13 20:08:19', '2021-06-13 20:08:19'),
(2, 'baru2', 'baru2@email.com', '123456', 'Bio bontoh 1', '2021-06-13 20:12:51', '2021-06-13 20:12:51'),
(3, 'baru2', 'baru2@email.com', '123456', 'Bio bontoh 1', '2021-06-13 20:12:57', '2021-06-13 20:12:57'),
(4, 'baru2', 'baru2@email.com', '123456', 'Bio bontoh 1', '2021-06-13 20:16:54', '2021-06-13 20:16:54');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `ktps`
--
ALTER TABLE `ktps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `tb_tests`
--
ALTER TABLE `tb_tests`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idPenjual` (`idPenjual`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ktps`
--
ALTER TABLE `ktps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tb_tests`
--
ALTER TABLE `tb_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ktps`
--
ALTER TABLE `ktps`
  ADD CONSTRAINT `ktps_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`idPenjual`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
