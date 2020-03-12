json.set! :user do
  json.set! :id, @user.id
  json.set! :username, @user.username
end

#=> { user: { id: id, username: username } }