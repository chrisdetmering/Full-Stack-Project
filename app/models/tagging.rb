class Tagging < ApplicationRecord 
  belongs_to :tag 
  belongs_to :todo
end 