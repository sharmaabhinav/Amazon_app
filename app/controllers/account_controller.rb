class AccountController < ApplicationController
  
  def create
	Account.create!(
	  name: params[:name],
	  access_key: params[:access_key],
	  secret_access_key: params[:secret_access_key],
	  region: params[:region]
	)
  end
  
  def view
	render :json => @accounts.to_json
  end

  def specified
	render :json => @account.to_json	
  end
  
  def delete
	@account.destroy_all
  end

end
