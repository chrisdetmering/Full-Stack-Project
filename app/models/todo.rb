class Todo < ApplicationRecord  
  validates :title, :due, presence: true
  validates :done, inclusion: { in: [true, false] }

end 