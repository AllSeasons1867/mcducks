This application utilizes Ruby on Rails to deliver a location-based coupon to potential fast food customers. 

JavaScript is compiled with the Rails Asset Pipeline along with Sprockets. This allows the application to bypass the complexity of module import/export dynamics that are inherent with Webpacker. 

When the application is downloaded to your local machine you will have to configure the database permissions in the database.yml file to be congruent with your system. 

Run 'rails db:create' and then 'rails db:migrate' to instantiate the database. 

Run the server with the command 'rails s'.

Once the app is running you may click on the coupon button to explore the app's functionality. If you are within half a mile of the chosen McDuck's location you will receive a coupon for your next order. 
