require './lib/configs_loader'

ENV['RAILS_ENV'] ||= 'production'
ConfigsLoader.load_configs ENV['RAILS_ENV'], :locum

@login   = ENV['LOCUM_LOGIN']
@user    = ENV['LOCUM_USER']
@project = ENV['LOCUM_APPLICATION']
@dir     = "/home/#{@user}/projects/#{@project}/current"
@workers = 1

user("#{@user}",'prime_users')
worker_processes   @workers
preload_app        true
timeout            30
working_directory  @dir
stderr_path        "#{@dir}/log/unicorn.stderr.log"
stdout_path        "#{@dir}/log/unicorn.stdout.log"
listen             "/var/sockets/#{@user}/#{@project}.#{@login}.sock", umask: 0117
pid                "/var/run/unicorn/#{@user}/#{@project}.#{@login}.pid"

GC.copy_on_write_friendly = true if GC.respond_to? :copy_on_write_friendly=

before_fork do |server, _|
  old_pid = "#{server.config[:pid]}.oldbin"
  if File.exist?(old_pid) && server.pid != old_pid
    begin
      Process.kill('QUIT', File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end
end

after_fork do |_, _|
  # reset rails cache to not share memcached
  Rails.cache.reset if Rails.cache.respond_to? :reset
  # PG errors (not for Mongo)
  ActiveRecord::Base.connection.reconnect! if (Gem.loaded_specs['mongo'].nil? && Gem.loaded_specs['mongoid'].nil?)
end
