class Todo < ApplicationRecord  
  validates :title, :body, :due, presence: true
  validates :done, inclusion: { in: [true, false] }

end 