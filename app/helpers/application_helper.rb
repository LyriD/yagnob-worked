module ApplicationHelper


  def true_var(product)
    if spree_current_user
    if spree_current_user.price_kind == -1
      out = product.variants
      out << product.master if out.blank?
    elsif !spree_current_user.price_kind.blank?
          product.variants.each do |variant|
            if variant.option_values.first.name.to_i == spree_current_user.price_kind.to_i
              out = variant
            end
          end
    end
    end

    return out
  end

end
