class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image? #unless: :image? = imageカラムが空だったら と言う意味になる（ifの逆 if: :image? だったらimageカラムが空でなければ になる）

  mount_uploader :image, ImageUploader
end