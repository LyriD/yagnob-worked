class Spree::Admin::PagesController < Spree::Admin::ResourceController


  def articles_index
    @articles = Article.all
  end

  def edit_article
    @article = Article.find(params[:article_item_id])
  end

  def add_article
    @article = Article.new
  end

  def create_article
    @article = Article.new(article_params)

    respond_to do |format|
      if @article.save
        format.html { redirect_to '/admin/articles', notice: 'Статья создана' }
      else
        format.html { redirect_to :back, notice: 'Ошибка!' }
      end
    end
  end

  def update_article
    @article = Article.find(params[:article][:id])
    respond_to do |format|
      if  @article.update(article_params)
        format.html { redirect_to '/admin/articles', notice: 'Статья отредактирована' }
      else
        format.html { redirect_to :back, notice: 'Ошибка!' }
      end
    end
  end

  def delete_article
    Article.find(params[:article_item_id]).destroy
    redirect_to :back
  end






  def materials_index
    @materials = Material.all

  end

  def edit_material
    @material = Material.find(params[:material_item_id])
  end

  def add_material
    @material = Material.new
  end

  def create_material
    @material = Material.new(material_params)
    respond_to do |format|
      if @material.save
        format.html { redirect_to '/admin/materials', notice: 'Материал добавлен' }
      else
        format.html { redirect_to :back, notice: 'Ошибка!' }
      end
    end
  end

  def update_material
    @material = Material.find(params[:material][:id])
    respond_to do |format|
      if  @material.update(material_params)
        format.html { redirect_to '/admin/materials', notice: 'Материал отредактирован' }
      else
        format.html { redirect_to :back, notice: 'Ошибка!' }
      end
    end
  end

  def delete_material
    Material.find(params[:material_item_id]).destroy
    redirect_to :back
  end




  private

  # Use callbacks to share common setup or constraints between actions.

  # Never trust parameters from the scary internet, only allow the white list through.
  def article_params
    params.require(:article).permit(:title, :text, :teaser, :slug, :author, spree_images_attributes: [:viewable_id, :attachment, :alt, :viewable_type, :id, :_destroy])
  end

  def material_params
    params.require(:material).permit(:title, :text, spree_images_attributes: [:viewable_id, :attachment, :alt, :viewable_type, :id, :_destroy])
  end





end