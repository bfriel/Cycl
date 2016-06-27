# Cycl

[Heroku link][heroku] **Note:** This will link to my production site (cycl.tech)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Cycl is a web application inspired by MapMyRun that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Creation of cycling routes via Google Maps
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Dashboard of completed routes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments on routes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Following of other users
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

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication. Set up on Heroku

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

* [Phase One][phase-one]
[phase-one]: docs/phases/phase1.md

### Phase 2: Flux Architecture with User and Following Implementation (1 day)

**Objective:** Seamless navigation from Dashboard to User and Follower pages.

- [ ] create `Follower` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for routes (`FollowersController`)
- [ ] jBuilder views for users
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console

* [Phase Two][phase-two]
[phase-two]: docs/phases/phase2.md

### Phase 3: Create Routes using Google Maps (3 days)

**Objective:** Routes can be created and read through the API/User interface.

- [ ] Allow users to create routes using Google Maps API
- [ ] Routes can be saved along with their mileage, duration, elevation gain, calories burned, description, and picture of route
- [ ] Routes can be reused

* [Phase Three][phase-three]
[phase-three]: docs/phases/phase3.md

### Phase 4: Styling (3 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] Create an aesthetic splash page
- [ ] Make sure seed data is adequate
- [ ] Style uniformly

* [Phase Four][phase-four]
[phase-four]: docs/phases/phase4.md

### Phase 5: Adding Comments to Routes (1 day)

**Objective:** Existing route pages will show comments.

- [ ] Allow users to leave comments on a Route Show page

* [Phase Five][phase-five]
[phase-five]: docs/phases/phase5.md
