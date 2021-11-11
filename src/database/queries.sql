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
)
