delete from images
where post_id = $1;

delete from posts
where post_id = $1;