# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app, Index Route is routes index page

## JSON API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

### Rides

- `GET /api/rides`
- `POST /api/rides`
- `GET /api/rides/:id`
  - will fetch all comments for a given ride as well as ability to make a POST request to make new comment

### Followers

- `GET /api/followers`
- `POST /api/followers`
- `GET /api/followers/:id`
- `DELETE /api/followers/:id`
- `GET /api/followers/:id/routes`
  - index of all routes for a follower
