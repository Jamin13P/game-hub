select * from posts
where user_id = $1
and post_id = $2;