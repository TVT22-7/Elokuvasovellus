INSERT INTO
    users (username, password)
VALUES (
        'john_doe',
        'securepassword123'
    );

-- Assuming we already have a user with user_id = 1 (from the previous insert)

INSERT INTO
    groups (name, description, owner_id)
VALUES (
        'Cinema Lovers',
        'A group for people who love movies and series.',
        1
    );

-- Assuming we have a group with group_id = 1

-- and a second user with user_id = 2

INSERT INTO
    group_members (group_id, user_id, status)
VALUES (1, 2, 'Approved');

INSERT INTO
    movies_series (
        title,
        description,
        release_date,
        genre
    )
VALUES (
        'The Great Adventure',
        'An epic journey of discovery.',
        '2023-01-01',
        'Adventure'
    );

-- Assuming we have a movie with movie_id = 1

-- and a user with user_id = 1

INSERT INTO
    reviews (
        movie_id,
        user_id,
        rating,
        review_text
    )
VALUES (
        1,
        1,
        4.5,
        'An exceptional movie with stunning visuals.'
    );

INSERT INTO
    news (title, content, link)
VALUES (
        'New Sci-Fi Movie Released',
        'A new science fiction movie has hit the theaters, breaking previous box office records.',
        'http://example.com/new-sci-fi-movie'
    );

-- Assuming we have a news item with news_id = 1

-- and a group with group_id = 1

INSERT INTO group_news (news_id, group_id) VALUES (1, 1);

-- Assuming we have a user with user_id = 1

INSERT INTO
    user_custom_views (user_id, content)
VALUES (
        1,
        'Custom view settings and preferences.'
    );