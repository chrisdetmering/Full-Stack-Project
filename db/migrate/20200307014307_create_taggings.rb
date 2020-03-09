class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :todo_id, null: false, limit: 8 
      t.integer :tag_id, null: false, limit: 8 
    end
  end
end
