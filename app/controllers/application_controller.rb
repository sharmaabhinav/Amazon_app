class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :allow_cross_origin, :selected_account, :all_accounts

  private

  def allow_cross_origin
    headers['Access-Control-Allow-Origin'] = "*"
  end

  def selected_account
    @account = Account.where(:name => params[:account])
  end

  def all_accounts
    @accounts = Account.find(:all)
  end	

end
