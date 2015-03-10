module ApplicationHelper


  def true_var(product)
    out = []
    if spree_current_user
    if spree_current_user.price_kind == -1
          out << product.variants
          out << product.master if out.blank?
    elsif !spree_current_user.price_kind.blank?
          product.variants.each do |variant|
            if variant.option_values.first.name.to_i == spree_current_user.price_kind.to_i
              out << variant
            end
          end
    end
    else
      out = []
    end
    o = (out.first.class == Spree::Variant)? out : out.first
    return o
  end


  def get_coords(c)
    hui = nested_hash_value(HTTParty.get('http://geocode-maps.yandex.ru/1.x/', query: {geocode: c}), 'pos').to_s
    out = '['+hui.split(' ').first.to_s+', '+hui.split(' ').second.to_s+']'
  end

  def nested_hash_value(obj,key)
    if obj.respond_to?(:key?) && obj.key?(key)
      obj[key]
    elsif obj.respond_to?(:each)
      r = nil
      obj.find{ |*a| r=nested_hash_value(a.last,key) }
      r
    end
  end


end
