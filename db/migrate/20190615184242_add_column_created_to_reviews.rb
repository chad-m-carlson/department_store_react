class AddColumnCreatedToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :created, :datetime
  end
end
