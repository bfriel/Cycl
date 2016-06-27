# Phase 5: Comments

## Rails
### Models
* Comments

### Controllers
* Api::CommentsController (create, destroy, index)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
* CommentsForm

### Stores
* Comments

### Actions
* ApiActions.receiveAllComments -> triggered by ApiUtil
* ReminderActions.fetchAllComments -> triggers ApiUtil
* CommentActions.createComment


### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.createComment

## Gems/Libraries
