# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app, Index Route is routes index page

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Routes

- `GET /api/routes`
- `POST /api/routes`
- `GET /api/notes/:id`

### Followers

- `GET /api/followers`
- `POST /api/followers`
- `GET /api/followers/:id`
- `DELETE /api/followers/:id`
- `GET /api/followers/:id/routes`
  - index of all routes for a follower

### Comments

- `POST /api/routes/:routeId/comments`: add comment to route by id
- `DELETE /api/routes/:routeId/comments/:commentId`: remove comment from route by id
