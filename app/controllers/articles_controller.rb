class ArticlesController < ApplicationController





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

  private
    # Use callbacks to share common setup or constraints between actions.


  def article_params
    params.require(:article).permit(:title, :text, :teaser, :slug, spree_images_attributes: [:viewable_id, :attachment, :alt, :viewable_type, :id, :_destroy])
  end
end
