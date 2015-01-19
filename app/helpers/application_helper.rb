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
      product.variants.each do |variant|
        if variant.option_values.first.name.to_i == 1
          out << variant
        end
      end
    end
    o = (out.first.class == Spree::Variant)? out : out.first
    return o
  end

end
