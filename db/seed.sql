create table users(
user_id serial primary key,
username varchar(15),
password varchar(20),
profile_pic text
);

create table posts(
post_id serial primary key,
post varchar(250),
user_id int references users(user_id)
);

create table images(
image_id serial primary key,
picture text,
post_id int references posts(post_id)
);