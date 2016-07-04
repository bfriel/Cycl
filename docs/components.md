## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **SignupForm**
  * **LoginForm**
  * **Feed**
    * RidesIndex
      * RideIndexItem
        * **RideItem**
          * RideItemDetail
          * RideItemMap
          * Comments
    * **CreateRide**
      * RideInfo
      * ElevationChart
      * CreateRideMap
    * FolloweesIndex
      * FolloweesIndexItem
        * **UserItem**
    * **UserItem**
      * FolloweesIndex
      * RidesIndex
        * RidesIndexItem
          * **RideItem**

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Signup` **path** `signup`
  * **component:** `Login` **path** `login`
  * **component:** `Feed` **path** IndexRoute
    * **component:** `CreateRide` **path:** `rides/create`
    * **component:** `UserItem` **path:** `user/:userId`
      * **component:** `RideItem` **path:** `rides/:rideId`
