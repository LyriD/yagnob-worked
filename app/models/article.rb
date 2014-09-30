class Article < ActiveRecord::Base

  extend FriendlyId
  friendly_id :title, use: :slugged

  has_many :spree_images, -> { where viewable_type: 'Article' }, :class_name => 'Spree::Image', foreign_key: :viewable_id, dependent: :destroy
  accepts_nested_attributes_for :spree_images, :reject_if => lambda { |a| a[:attachment].blank? }, allow_destroy: true

end
