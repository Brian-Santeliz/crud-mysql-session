
/* TABLA USUARIUOS */

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

/* TABLA ALMACEN */

CREATE TABLE `almacen` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `nombre_marca` varchar(20) NOT NULL,
  `especificaciones` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;


ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);
ALTER TABLE `almacen`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `almacen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
