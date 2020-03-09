class Step < ApplicationRecord
  validates :body, presence: true

  belongs_to :todo
end 