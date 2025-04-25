# Namaste React


# parcel
-Dev build
-local server 
-HMR = Hot Module Replacement
-File Watching Algorithm - written in c++
-Image optimization
-Minification of our files
-Bundling
-Compress our files
-Code splitting
-Differential Bundling - Support to run in  thr older Browsers
-Tree Shaking - will remove the unused code 
-Different dev and prod bundles


# Namaste react
/**
 * Header
 *  -logo
 *  -nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *      -Restaurantcard
 *          -Img
 *          -Name of res, Star rating, Cuisines, TimeForDelivery
 * Footer
 *  -copyright
 *  -Links
 *  -Address
 *  -Contact
 *  
 */


# Two types of export and import
    -Default Export/Import
        export default Component;
        import Component from "path";

    -Named Export/Import
        export const Component;
        import {Component} from "path"; 


# React Hooks
(Normal JS utility functions)
    -useState()
    -useEffect()
        - [] --> this use state has 2 attributes one is call back func and next is empty dependency array. So becoz of this array exists, so it will call the api once after the initial render

# Routing Types
    -Server Side Routing  --> It makes the network call and get the data from the network, renders it to the UI and refresh the whole page (Old concept).
    -Client side Routing  --> Here we will not make any network call for data, we already have the data for the other pages. For ex, if we have the about.js page while we click that it directly displays that about us page component into UI.