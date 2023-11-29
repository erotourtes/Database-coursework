#!/bin/fish

# --------------------
# 1 User
# --------------------

set url "localhost:3000"

#  get user by id

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
