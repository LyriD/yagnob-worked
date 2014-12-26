module Spree
  class ProductsController < Spree::StoreController
    before_filter :load_product, :only => :show
    before_filter :load_taxon, :only => :index

    rescue_from ActiveRecord::RecordNotFound, :with => :render_404
    helper 'spree/taxons'

    respond_to :html

    def index
      @searcher = build_searcher(params)
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.includes(root: :children)
    end

    def xml_export
     url = request.protocol+request.host_with_port
     xm = []
     Spree::Product.limit(20).each do |p|
       h={}
       h['артикул'] = p.sku
       h['название'] = p.name
       h['фото'] = url+p.variant_images.first.attachment.url unless p.variant_images.empty?
       h['ссылка на товар'] = product_url(p)
       h['описание'] = p.description
       sv = {}
       p.product_properties.includes(:property).each do |prop|
         # unless (prop.value.blank? or prop.property.presentation.blank? or prop.property.name.blank?)
         sv["#{prop.property.name}"] = prop.value.to_s + ' ' + prop.property.presentation.to_s
         # end
       end
       h['свойства'] = sv
       xm << h
      end
     render :xml => xm.to_xml
    end

    def show
      @variants = @product.variants_including_master.active(current_currency).includes([:option_values, :images])
      @product_properties = @product.product_properties.includes(:property)
      @taxon = Spree::Taxon.find(params[:taxon_id]) if params[:taxon_id]
    end

    private
      def accurate_title
        @product ? @product.name : super
      end

      def load_product
        if try_spree_current_user.try(:has_spree_role?, "admin")
          @products = Product.with_deleted
        else
          @products = Product.active(current_currency)
        end
        @product = @products.friendly.find(params[:id])
      end

      def load_taxon
        @taxon = Spree::Taxon.find(params[:taxon]) if params[:taxon].present?
      end
  end
end
