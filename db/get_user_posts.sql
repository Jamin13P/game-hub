select u.user_id, p.post_id, u.username, p.post, i.picture from posts p
join users u on p.user_id = u.user_id
join images i on i.post_id = p.post_id
where u.user_id = $1
order by p.post_id desc;