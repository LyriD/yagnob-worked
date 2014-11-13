json.array!(@baloons) do |baloon|
  json.extract! baloon, :id, :coords, :caption, :header, :body, :footer
  json.url baloon_url(baloon, format: :json)
end
