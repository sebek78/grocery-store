-- PostgresSQL version: 12.3

CREATE TABLE users (
	user_id serial4 NOT NULL,
	username varchar(32) NOT NULL,
	"password" varchar(60) NOT NULL,
	created_on timestamp NOT NULL,
	last_login timestamp NULL,
	refresh_token varchar NULL,
	CONSTRAINT users_pkey PRIMARY KEY (user_id),
	CONSTRAINT users_username_key UNIQUE (username)
);

create TABLE games (
	game_id serial4 NOT NULL,
	cash INT NOT NULL,
	phase INT NOT NULL,
	turn INT NOT NULL,
	is_running bool NOT NULL,
	player_id int NOT NULL,
	store_name varchar(32) NOT NULL,
	difficulty varchar(6) NOT NULL,
	primary key(game_id),
	constraint fk_player
		foreign key (player_id)
			references users(user_id)
);

create TABLE distribution_center (
	center_id serial4 NOT NULL,
	game_id int not null,
	costs varchar[6] not null,
	primary key(center_id),
	constraint fk_game
		foreign key (game_id)
			references games(game_id)
);

create TABLE stores (
	store_id serial4 NOT NULL,
	game_id int not null,
	store text, 
	stock_room text,
	primary key(store_id),
	constraint fk_game
		foreign key (game_id)
			references games(game_id)
);

CREATE TABLE public.customers (
	customers_id serial4 NOT NULL,
	game_id int4 NOT NULL,
	customers_data _varchar NOT NULL
);
ALTER TABLE public.customers ADD CONSTRAINT customers_fk FOREIGN KEY (game_id) REFERENCES public.games(game_id);
