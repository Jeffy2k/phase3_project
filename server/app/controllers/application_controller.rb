class ApplicationController < Sinatra::Base

  enable :sessions

    set :default_content_type, 'application/json'
# Define a route to get all projects for a user

get '/users' do
users = User.all
users.to_json
end

get '/users/:id/projects' do
  content_type :json
  user_id = params[:id]
  # Retrieve all projects for the given user from the database
  projects = Project.where(user_id: user_id)
  # Return the projects as JSON
  projects.to_json
end

# create a new user in the database
post '/add/user' do
  # check if email already exists in database
  if User.find_by(email: params[:email])
    return "Error: Email already exists"
  end
  # create a new user
  user = User.new(
    first_name: params[:first_name],
    last_name: params[:last_name],
    email: params[:email],
    career: params[:career],
    bio: params[:bio],
    password: params[:password]
  )
  user.save
end

# login
  # Login form
  get '/login' do
    erb :login
  end

  # Handle login form submission
  post '/login' do
    # Find the user by email
    user = User.find_by(email: params[:email])

    # If the user exists and the password is correct
    if user && BCrypt::Password.new(user.password_hash) == params[:password]
      # Store the user id in the session
      session[:user_id] = user.id

      # Redirect to the user's dashboard
      redirect "/users/#{user.id}"
    else
      # If the login credentials are incorrect, render the login form with an error message
      erb :login, locals: { error: "Invalid email or password." }
    end
  end

  # user's dashboard
  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json(include::projects)
  end

# Define a route to update an existing project for a user
put '/users/:id/projects/:project_id' do
  content_type :json
  user_id = params[:id]
  project_id = params[:project_id]
  project = Project.where(user_id: user_id, id: project_id).first
  if project
    # Update the project attributes
    project.update_attributes(params[:project])
    # Return the updated project as JSON
    project.to_json
  else
    # Return an error message as JSON
    { error: 'Project not found' }.to_json
  end
end

# Define a route to delete a project for a user
delete '/users/:id/projects/:project_id' do
  content_type :json
  user_id = params[:id]
  project_id = params[:project_id]
  project = Project.where(user_id: user_id, id: project_id).first
  if project
    # Delete the project from the database
    project.destroy
    # Return a success message as JSON
    { message: 'Project deleted successfully' }.to_json
  else
    # Return an error message as JSON
    { error: 'Project not found' }.to_json
  end
  end

end