set :unicorn_args,       ''
set :unicorn_reset_mode, :hard
set :bundle_without,     [:development, :test]
set :branch,             ENV['REVISION'] || ENV['BRANCH_NAME'] || 'master'

namespace :deploy do
  before :migrate,       :db_dump
  after  :migrate,       :db_seed
end
