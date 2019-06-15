class Item < ApplicationRecord
  validates :price,:name, presence: true

  belongs_to :department

  has_many :reviews
end
