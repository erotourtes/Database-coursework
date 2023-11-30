#!/bin/fish

# --------------------
# 1 User
# --------------------

set url "localhost:3000"

#  get user by id add Authorization header

# curl -X GET -H "Authorization: Bearer 2" $url/users/2 | jq '.'

# curl -X GET $url/users/1 | jq '.'


# get all users

# curl -X GET $url/users | jq '.'


# create user

# curl -X POST -H "Content-Type: application/json" -d \
# '{
#   "login":"Johinator",
#   "mail":"jo@hn.com",
#   "password":"password",
#   "organizationListId":1,
#   "role":"admin"
# }' $url/users | jq '.'


# update user

# curl -X PATCH -H "Content-Type: application/json" -d \
# '{
#   "login":"UPDATE: Johinator",
#   "email":"updatejo@hn.com",
#   "role":"admin"
# }' $url/users/10 | jq '.'


# delete user

# curl -X DELETE $url/users/5 | jq '.'


# --------------------
# 2 Access
# --------------------

# get all accesses

# curl -X GET $url/accesses | jq '.'


# get access by id

# curl -X GET $url/accesses/1 | jq '.'


# create access

# curl -X POST -H "Content-Type: application/json" -d \
# '{
#   "userId":1,
#   "postId":1
# }' $url/accesses | jq '.'


# update access

# curl -X PATCH -H "Content-Type: application/json" -d \
# '{
#   "time":"2023-11-29T14:05:25.917Z"
# }' $url/accesses/1 | jq '.'


# delete access

# curl -X DELETE $url/accesses/1 | jq '.'


# --------------------
# 3 Post
# --------------------

# get all posts

# curl -X GET $url/posts | jq '.'


# get post by id

curl -X GET $url/posts/4 -H "Authorization: Bearer 3" | jq '.'


# create post

# curl -X POST -H "Content-Type: application/json" -d \
# '{
#   "title":"Post 1",
#   "name":"name 1",
#   "description":"description 1"
# }' $url/posts | jq '.'


# update post

# curl -X PATCH -H "Content-Type: application/json" -d \
# '{
#   "title":"UPDATE: Post 1"
# }' $url/posts/1 | jq '.'


# delete post

# curl -X DELETE $url/posts/1 | jq '.'
