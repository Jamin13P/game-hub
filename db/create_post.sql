with post_creator as (
    insert into posts
    (post, user_id)
    values
    ($2, $1)
    returning post_id, post, user_id
),

image_creator as (
    insert into images
    (picture, post_id)
    values
    ($3, (select post_id from post_creator))
    returning picture, post_id
)

select u.username, pc.post, ic.picture  from post_creator pc
join image_creator ic on pc.post_id = ic.post_id
join users u on u.user_id = pc.user_id;