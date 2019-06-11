x=0
5.times do
  Department.create(
    name: Faker::Commerce.department(2, true),
    description: Faker::Lorem.sentence(3, false, 4),
  )
  x += 1
  10.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.paragraph,
      price: Faker::Commerce.price ,
      department_id: x ,
    )
  end
end

puts "Created 5 departments with 10 items"