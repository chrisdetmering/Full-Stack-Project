class AddNullContrantToDueColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :todos, :due, true
  end

end
