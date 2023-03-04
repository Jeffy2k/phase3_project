puts "Seeding data"

joe = User.create(first_name: "joe", last_name: "Doe", email: "joe@example.com", password: "1234")

dashboard = Project.create(title: "Dashboard", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit", image_url: "http://somathing.com", project_status: "completed", project_Github_url: "https://github.com/", user_id: joe.id)
bank = Project.create(title: "bank", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit", image_url: "http://somathing.com", project_status: "completed", project_Github_url: "https://github.com/", user_id: joe.id)
password_generator = Project.create(title: "password_generator", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit", image_url: "http://somathing.com", project_status: "completed", project_Github_url: "https://github.com/", user_id: joe.id)
tic_tac_toe = Project.create(title: "tic_tac_toe", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit", image_url: "http://somathing.com", project_status: "completed", project_Github_url: "https://github.com/", user_id: joe.id)
flatacuties = Project.create(title: "flatacuties", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit", image_url: "http://somathing.com", project_status: "completed", project_Github_url: "https://github.com/", user_id: joe.id)


ux_design = Skill.create(name: "ux_design", description: "ux designing", user_id: joe.id)
full_stack_developer = Skill.create(name: "full_stack_developer", description: "ux designing", user_id: joe.id)
frontend_developer = Skill.create(name: "frontend_developer", description: "ux designing", user_id: joe.id)
backend_developer = Skill.create(name: "backend_developer", description: "ux designing", user_id: joe.id)
cyber_security = Skill.create(name: "cyber_security", description: "ux designing", user_id: joe.id)


# users_list = []

# 50.times do
#     new_user = User.create(
#       first_name: Faker::Name.first_name,
#       last_name: Faker::Name.last_name,
#       email: Faker::Internet.free_email,
#       password_digest: rand(1000..9999)
#     )
#     users_list << new_user
# end

# project_list = []
# users_list.each do |user|
#     rand(1..5).times do
#     new_project = Project.create(
#         title: Faker::Lorem.word,
#         description: Faker::Lorem.sentence,
#         image_url: Faker::Internet.url,
#         project_status: "completed",
#         project_Github_url: Faker::Internet.url,
#         user_id: user.id
#     )
#     project_list << new_project
# end
# end

# users_list.each do |user|
#     rand(1..10).times do
#     new_skill = Skill.create(
#         name: Faker::Lorem.word,
#         description: Faker::Lorem.sentence,
#         user_id: user.id
#     )
# end
# end

# project_list.each do |project|
#     rand(1..10).times do
#         new_tag = Tag.create(
#             name: Faker::Lorem.word,
#             project_id: project.id
#         )
#     end
# end