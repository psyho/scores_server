require 'faye'
require 'sinatra'

get '/' do
  File.new('public/index.html').readlines
end

use Faye::RackAdapter, :mount => '/faye', :timeout => 25

run Sinatra::Application
