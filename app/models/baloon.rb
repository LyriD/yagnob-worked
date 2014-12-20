class Baloon < ActiveRecord::Base

  has_attached_file :logo,
                    styles: { mini: '48x48>', small: '200x200>', product: '350x350>', large: '800x600>', article_index: '600x400>', home: '1420x800>' },
                    default_style: :product,
                    url: '/spree/baloons/:id/:style/:basename.:extension',
                    path: ':rails_root/public/spree/baloons/:id/:style/:basename.:extension',
                    convert_options: { all: '-strip -auto-orient -colorspace sRGB' }

  # has_one :spree_image, -> { where viewable_type: 'Article' }, :class_name => 'Spree::Image', foreign_key: :viewable_id, dependent: :destroy
  # accepts_nested_attributes_for :spree_images, :reject_if => lambda { |a| a[:attachment].blank? }, allow_destroy: true



end
