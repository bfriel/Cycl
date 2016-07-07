# Cycl

[Live Link][heroku]

[heroku]: http://www.cycl.tech

## Minimum Viable Product

Cycl is a web application inspired by MapMyRun that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Creation of cycling routes via Google Maps
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [x] Feed of completed routes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments on routes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [x] Following of other users
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with Authentication. Set up on Heroku

- [ ] Create new project
- [ ] Create `User` model
- [ ] Authentication
- [ ] User signup/signin pages
- [ ] Styled landing page with Navbar after login

* [Phase One][phase-one]
[phase-one]: docs/phases/phase1.md

### Phase 2: Create Routes using Google Maps (2 days)

**Objective:** Routes can be created through the API/User interface.

- [ ] Allow users to create routes using Google Maps API
- [ ] Routes can be saved along with their mileage, duration, elevation gain, calories burned, description, and picture of route
- [ ] Routes can be reused
- [ ] Create Route page is styled

* [Phase Two][phase-three]
[phase-three]: docs/phases/phase3.md

### Phase 3: Save Routes to Feed and User Page (2 days)

**Objective:** Routes can be viewed through the API/User interface.

- [ ] Saved Routes appear automatically on User Page
- [ ] Feed shows routes of all folowees
- [ ] Feed and User Page are styled

* [Phase Three][phase-three]
[phase-three]: docs/phases/phase3.md

### Phase 4: Following Implementation (1 day)

**Objective:** Seamless navigation from Dashboard to User and Follower pages.

- [ ] Create `Follower` model
- [ ] Seed the database with a small amount of test data
- [ ] CRUD API for routes (`FollowersController`)
- [ ] jBuilder views for users
- [ ] Setup Webpack & Flux scaffold
- [ ] Setup `APIUtil` to interact with the API
- [ ] Test out API interaction in the console


### Phase 5: Adding Comments to Routes (1 day)

**Objective:** Existing route pages will show comments.

- [ ] Allow users to leave comments on a Route Show page

* [Phase Five][phase-five]
[phase-five]: docs/phases/phase5.md

### Bonus Phase

  - [ ] Cheers for friends
  - [ ] Search for rides by location
  - [ ] Goals
  - [ ] Ranking system for current users
