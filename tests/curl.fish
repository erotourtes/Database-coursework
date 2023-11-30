#!/bin/fish

set url "localhost:3000"

# --------------------
# 1 User
# --------------------

#  get user by id

# curl -X GET -H "Authorization: Bearer 2" $url/users/2 | jq '.'

# curl -X GET $url/users/2 | jq '.'


# get all users

# curl -X GET $url/users -H "Authorization: Bearer 1" | jq '.'


# create user

# curl -X POST -H "Content-Type: application/json" -d \
# '{
#   "login":"Johinator2000",
#   "email":"jo@hn.com",
#   "password":"password",
#   "organizationListId":1,
#   "role":"sadmin"
# }' $url/users | jq '.'


# update user

# curl -X PATCH \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 2" -d \
# '{
#   "login":"UPDATE: Johinator",
#   "email":"updatejo@hn.com",
#   "role":"sadmin"
# }' $url/users/2 | jq '.'


# delete user

# curl -X DELETE -H "Authorization: Bearer 1" $url/users/2 | jq '.'

# curl -X DELETE $url/users/2 | jq '.'


# --------------------
# 2 Access
# --------------------

# get all accesses

# curl -X GET $url/accesses -H "Authorization: Bearer 1" | jq '.'

# curl -X GET $url/accesses | jq '.'


# get access by id

# curl -X GET $url/accesses/7 -H "Authorization: Bearer 1" | jq '.'


# create access

# curl -X POST \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 1" -d \
# '{
#   "userId":1,
#   "postId":1
# }' $url/accesses | jq '.'


# update access

# curl -X PATCH \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 1" -d \
# '{
#   "time":"2023-11-29T14:05:25.917Z"
# }' $url/accesses/1 | jq '.'


# delete access

# curl -X DELETE -H "Authorization: Bearer 1" $url/accesses/1 | jq '.'


# --------------------
# 3 Post
# --------------------

# get all posts

# curl -X GET $url/posts | jq '.'


# get post by id

# curl -X GET $url/posts/3 -H "Authorization: Bearer 1" | jq '.'


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

# curl -X PATCH \
# -H "Content-Type: application/json" \
# -H "Authorization: Bearer 1" -d \
# '{"title":"UPDATE: Post 1"}' $url/posts/1 | jq '.'

# delete post

# curl -X DELETE -H "Authorization: Bearer 1" $url/posts/1 | jq '.'
