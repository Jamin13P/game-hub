select p.post_id, u.username, p.post, i.picture from posts p
join users u on p.user_id = u.user_id
join images i on p.post_id = i.post_id
order by random()
limit 20;