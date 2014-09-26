class Account < ActiveRecord::Base
  attr_accessible :access_key, :name, :region, :secret_access_key
end
