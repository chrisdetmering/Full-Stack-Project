class AddColumnToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :url, :string
  end
end
