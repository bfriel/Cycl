## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Dashboard**
    * RoutesIndex
      * RouteIndexItem
        * **RouteItem**
          * RouteItemDetail
          * RouteItemMap
          * Comments
    * **CreateRoute**
      * RouteForm
        * RouteFormDetail
        * RouteFormMap
    * FollowersIndex
      * FollowersIndexItem
        * **UserItem**
          * RoutesIndex
            * RoutesIndexItem
              * **RouteItem**
                * RouteItemDetail
                * RouteItemMap
                * Comments
    * **UserItem**
      * RoutesIndex
        * RoutesIndexItem
          * **RouteItem**
            * RouteItemDetail
            * RouteItemMap
            * Comments

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Dashboard` **path** IndexRoute
    * **component:** `CreateRoute` **path:** `routes/create`
    * **component:** `UserItem` **path:** `user/:userId`
      * **component:** `RouteItem` **path:** `routes/:routeId`
