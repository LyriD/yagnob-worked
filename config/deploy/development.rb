set :unicorn_args,       'dw'
set :unicorn_reset_mode, :hard
set :bundle_without,     []
set :branch,             ENV['REVISION'] || ENV['BRANCH_NAME'] || 'develop'

namespace :deploy do
  before :db_reset,      :stop_delayed_job
  after  :migrate,       :db_reset
end
