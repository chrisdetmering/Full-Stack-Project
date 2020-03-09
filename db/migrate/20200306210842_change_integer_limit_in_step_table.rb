class ChangeIntegerLimitInStepTable < ActiveRecord::Migration[5.2]
  def change
     change_column :steps, :todo_id, :integer, limit: 8
   end
end
