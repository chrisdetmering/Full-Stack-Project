class AddNullContrantToTodosDueDate < ActiveRecord::Migration[5.2]
  def change
    change_column_null :todos, :due, false
  end
end
