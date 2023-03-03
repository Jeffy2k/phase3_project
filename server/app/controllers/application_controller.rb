class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'

  enable :sessions

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
  # Handle login form submission
 post "/login" do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    content_type :json
    { success: true, message: "Login successful" }.to_json
  else
    content_type :json
    status 401 # unauthorized
    { error: "Invalid email or password." }.to_json 
  end
 end

  # user's dashboard
  get "/user" do
    user_id = session[:user_id]
    user = User.find(user_id)
    user.to_json(include: [:projects, :skills])
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