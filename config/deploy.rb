environment = ENV['RAILS_ENV'] ||= 'production'
ConfigsLoader.load_configs  environment, :locum
set :rails_env,             environment

set :use_sudo,              false
set :application,           ENV['LOCUM_APPLICATION']
set :deploy_to,             -> { "/home/#{ENV['LOCUM_USER']}/projects/#{ENV['LOCUM_APPLICATION']}" }
set :unicorn_conf,          -> { "#{current_path}/config/unicorn.rb" }
set :unicorn_pid,           -> do
  "/var/run/unicorn/#{ENV['LOCUM_USER']}/#{ENV['LOCUM_APPLICATION']}.#{ENV['LOCUM_LOGIN']}.pid"
end

set :rvm_ruby_version,      '2.1.5'
set :rvm_prefix,            -> { "rvm use #{fetch(:rvm_ruby_version)} do" }
set :bundle_cmd,            -> { "#{fetch(:rvm_prefix)} bundle" }
set :bundle_path,           -> { shared_path.join('gems') }

set :rake,                  -> { "#{fetch(:bundle_cmd)} exec rake" }

set :scm,                   :git
set :repo_url,              'git@github.com:LyriD/yagnob-worked.git'
set :deploy_via,            :remote_cache

role :app,                  ENV['LOCUM_SERVER'], primary: true
role :web,                  ENV['LOCUM_SERVER']
role :db,                   ENV['LOCUM_SERVER']

server ENV['LOCUM_SERVER'], user:                ENV['LOCUM_USER'],
       login:               ENV['LOCUM_LOGIN'],
       roles:               %w{app web},
       ssh_options: {
           user:              ENV['LOCUM_USER'],
           forward_agent:     true,
           auth_methods:      %w{password},
           password:          ENV['LOCUM_PASSWORD']
       },
       default_run_options: {pty: true}

namespace :deploy do
  after  :finishing,        :update_current_symlink
  after  :finishing,        :restart
  after  :finishing,        :cleanup
end
