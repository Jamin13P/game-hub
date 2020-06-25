update posts
set post = $2
where post_id = $1;

update images
set picture = $3
where post_id = $1;

select u.username, p.post, i.picture from posts p
join users u on p.user_id = u.user_id
join images i on i.post_id = p.post_id
where p.post_id = $1;