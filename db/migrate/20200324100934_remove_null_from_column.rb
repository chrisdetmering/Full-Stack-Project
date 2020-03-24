class RemoveNullFromColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :todos, :body, true
  end
end
