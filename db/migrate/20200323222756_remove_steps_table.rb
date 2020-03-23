class RemoveStepsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :steps
  end
end
