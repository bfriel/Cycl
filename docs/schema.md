# Schema Information

## users
  column name   | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## rides
  column name   | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
ride_positions  | text      | not null
ride_name       | string    | not null
elev_diff       | integer   | not null
distance        | float     | not null
description     | text      |
calories        | integer   |
duration        | time      | not null


## followers
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users), indexed
following_id | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
content     | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
ride_id     | integer   | not null, foreign key (references rides), indexed
