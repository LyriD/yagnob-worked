# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false
  config.default_country_id = 97

end

Spree::Config.set(:allow_ssl_in_production => false)
Spree::Auth::Config[:registration_step] = false
Spree::Config[:address_requires_state] = false
Spree::Config[:alternative_billing_phone] = false
Spree::Config[:mails_from] = 'sales@yagnob.ru'


Spree.user_class = "Spree::User"
