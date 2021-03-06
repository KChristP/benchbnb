class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render json: @benches
  end

  def new
    @bench = Bench.new
  end

  def create
    @bench = Bench.new(bench_params)
    # if @bench.save
    #   render :json @bench
    # end

  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :long, :seating)
  end
end
