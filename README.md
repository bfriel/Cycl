# Cycl

[Live Link][heroku]

[heroku]: http://www.cycl.tech

Cycl is a full-stack web application for mapping and sharing bicycle rides.
It combines a Ruby on Rails backend, PostgreSQL database, and React.js/Flux frontend to deliver an efficient single page app.

## Features

### Create Routes
Cycl combines the Google Maps and Google Roads APIs to present an intuitive and visually appealing UI.
Users simply click on the map to drop waypoints of where they rode. As they click, their ride's statistics are automatically
updated and their elevation is graphed below.

![alt text](http://i.imgur.com/pI8LF2c.jpg "Create a Ride page")

### Follow Users
Users can follow each other with the click of a button.

![alt text](http://i.imgur.com/pHUL5eC.png "User page")

Once followed, the followee's rides will be shown in the user's feed. Additionally, users will have easy access to their
followers through menu which follows them while they scroll.

![alt text](http://i.imgur.com/cqHHjTX.png "Users you follow menu")

### Comments
Each ride has space for displaying comments which is automatically updated whenever a new comment is created.
When a large volume of comments are left, users can simply scroll down within the box to view all of the comments.

![alt text](http://i.imgur.com/4DpAj28.png "Comments box")

## Future Directions

I look forward to adding the following features:

* Searching for rides by location
* Cheers for friends
* Ranking users by lifetime statistics
* Infinite scrolling on feed
