class Baloon < ActiveRecord::Base

  has_attached_file :attachment,
                    styles: { mini: '48x48>', small: '100x100>', product: '350x350>', large: '800x600>', article_index: '600x400>', home: '1420x800>' },
                    default_style: :product,
                    url: '/spree/products/:id/:style/:basename.:extension',
                    path: ':rails_root/public/spree/products/:id/:style/:basename.:extension',
                    convert_options: { all: '-strip -auto-orient -colorspace sRGB' }


end
