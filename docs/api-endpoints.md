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

- `GET /api/followees`
- `POST /api/followees`
- `GET /api/followees/:id`
- `DELETE /api/followees/:id`
- `GET /api/followees/:id/rides`
  - index of all routes for a followee
