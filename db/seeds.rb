# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Meeting.create(:name => "Tom", :time => DateTime.strptime("09/14/2019 8:00", "%m/%d/%Y %H:%M"), :duration => 30, :price => 100)