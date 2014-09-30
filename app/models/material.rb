class Material < ActiveRecord::Base
  has_one :spree_images, -> { where viewable_type: 'Material' }, :class_name => 'Spree::Image', foreign_key: :viewable_id, dependent: :destroy
  accepts_nested_attributes_for :spree_images, :reject_if => lambda { |a| a[:attachment].blank? }, allow_destroy: true
end
