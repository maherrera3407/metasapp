CREATE DATABASE metasapp;

CREATE TABLE cuentas (
  id SERIAL PRIMARY KEY,
  usuario text UNIQUE NOT NULL,
  hash text NOT NULL,
  sal text NOT NULL,
  avatar text
);

SELECT * FROM cuentas;

CREATE TYPE periodo AS ENUM ('día', 'semana','mes', 'año');

CREATE TABLE metas (
  id SERIAL PRIMARY KEY,
  usuario_id int NOT NULL,
  detalles text NOT NULL,
  periodo periodo NOT NULL,
  eventos int NOT NULL,
  icono text,
  meta int NOT NULL,
  plazo date DEFAULT current_date,
  completado int
);

SELECT * FROM metas;

CREATE TABLE logros (
  id SERIAL PRIMARY KEY,
  meta_id int NOT NULL,
  logro int NOT NULL,
  nota text,
  fecha timestamp DEFAULT now()
);

SELECT * FROM logros;

INSERT INTO cuentas (usuario, hash, sal, avatar) VALUES
(
	'sean kelly',
	'11c150vbnrwo8108249buqnvqob1ia86b4a68dbaaba4ba68b4ad64v8',
	'findigd0ry',
	'avatars/0000001.jpg'
);
 
INSERT INTO metas (usuario_id, detalles, periodo, eventos, ícono, meta, plazo,completado)
VALUES
(
   1,
   'meta 3',
   'día',
   6,
   '✈️',
   100,
   '2030-01-01',
   1
);

'🏃','📔','✈️','😈','💃','🎮'

INSERT INTO logros (meta_id, logro, nota) VALUES
  (1,3,'Estaba con energia e ise mas');
  
UPDATE logros SET logro=4 WHERE ID = 1;
UPDATE metas SET ícono='😈' WHERE ID = 1;





