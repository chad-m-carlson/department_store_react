
5.times do
  d = Department.create(
    name: Faker::Commerce.department(2, true),
    description: Faker::Lorem.sentence(3, false, 4),
  )
  10.times do
    i = d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph,
      price: Faker::Commerce.price ,
    )
    3.times do
      i.reviews.create(
        body: Faker::TvShows::DumbAndDumber.quote,
        author: Faker::Name.name,
        rating: rand(0..5),
      )
    end
  end
end

puts "Created 5 departments with 10 items with 3 reviews"

