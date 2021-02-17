ALTER TABLE helo_posts
DROP title,
DROP content, 
DROP img,
DROP date_created,
WHERE author_id = $1