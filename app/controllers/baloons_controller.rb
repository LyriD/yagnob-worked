class BaloonsController < ApplicationController
  before_action :set_baloon, only: [:show, :edit, :update, :destroy]

  # GET /baloons
  # GET /baloons.json
  def index
    @baloons = Baloon.all
  end

  # GET /baloons/1
  # GET /baloons/1.json
  def show
  end

  # GET /baloons/new
  def new
    @baloon = Baloon.new
  end

  # GET /baloons/1/edit
  def edit
  end

  # POST /baloons
  # POST /baloons.json
  def create
    @baloon = Baloon.new(baloon_params)

    respond_to do |format|
      if @baloon.save
        format.html { redirect_to @baloon, notice: 'Baloon was successfully created.' }
        format.json { render :show, status: :created, location: @baloon }
      else
        format.html { render :new }
        format.json { render json: @baloon.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /baloons/1
  # PATCH/PUT /baloons/1.json
  def update
    respond_to do |format|
      if @baloon.update(baloon_params)
        format.html { redirect_to @baloon, notice: 'Baloon was successfully updated.' }
        format.json { render :show, status: :ok, location: @baloon }
      else
        format.html { render :edit }
        format.json { render json: @baloon.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /baloons/1
  # DELETE /baloons/1.json
  def destroy
    @baloon.destroy
    respond_to do |format|
      format.html { redirect_to baloons_url, notice: 'Baloon was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_baloon
      @baloon = Baloon.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def baloon_params
      params.require(:baloon).permit(:coords, :caption, :header, :body, :footer)
    end
end
