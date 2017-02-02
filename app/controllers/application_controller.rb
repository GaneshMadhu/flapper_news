require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder

  protect_from_forgery with: :exception

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  def angular
    render 'layouts/application'
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :username])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :phone, :email, bank_attributes: [:bank_name, :bank_account]])
  end
end
