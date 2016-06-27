## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * RoutesIndex
    * **RouteItem**
      * **Comments**
  * CreateRoute
    * **RouteForm**
  * Friends
    * **FriendsIndex**
      * **UserItem**
        * RoutesIndex
          * **RouteItem**
            * **Comments**
  

## Routes

* **component:** `App` **path:** `/`
  * **component:** `RoutesIndex` **path:** IndexRoute
  * **component:** `RouteForm` **path:** `routes/create`
  * **component:** `RouteItem` **path:** `routes/:routeId`
    * **component:** `Comments` **path:** `comments`
  * **component:** `UserItem` **path:** `user/:userId`
    * **component:** `FriendsIndex` **path:** `friends`
