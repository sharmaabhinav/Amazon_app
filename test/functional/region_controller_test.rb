require 'test_helper'

class RegionControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

end
