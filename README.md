# Hello React 


...
# Parcel
  - Dev Build
  - Local Server
  - HMR = Hot Module Replacement
  - File Watching Algorithm - Written in C++
  - Caching - Faster Builds
  - Image Optimization
  - Minification
  - Bundling
  - Compress
  - Consistent Hashing
  - Differential Bundling - support older browsers
  - Diagnostic
  - Error Handling
  - HTTPs
  - Tree Shaking - remove unused code
  - Different dev and prod bundles

  # Food Ordering App 
  # Twiggy

  /*
* Header
    - Logo
    - Nav Items
    - 
* Body
    - Search
    - Resturant Container
        - Img
        - Name of res, Star Rating, cusine, delivery time
    - Resturant Card
* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

Two Types of Export/Import

- Default Export/Import

export default Component;;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path"

# React Hooks

(Normal JS utility functions)
- UseState() - Superpowerful State variables in react
- useEffect() - 

Whenever a State Variables changes react re-renders the component.

React Uses Reconcilication Algorithm(React Fiber)
Like we had resturant-container which had 20 cards, Now my UI changes from filtering these 20 cards to 4 cards.
Now why does it happen so fast, Firstly when you had 20 cards react creates a virtual DOM of it. Virtual DOM is not real DOM they are
<div>
    <div>
    </div>
</div>
These are real DOM. Virtual DOM are instead a representation of Actual DOM. To be more specific React Element are objects, similarly when you have a 
big structure it is all an object, so this object is basically react virtual DOM. This virtual DOM is nothing but react object.
Actual DOM(real div)            Virtual DOM (not real div but these are JS objects.)
<div>                           <div>
    <div>                           <div>
        <div>                           <div>
        </div>                          </div>
    </div>                          </div>
</div>                          <div>

# Diff Algorithm
Suppose the resturant-container has initially 7 cards and you clicked a button so there are now 3 cards.
So this diff algorithm tries to find out the difference between the old virtual DOM and new Virtual DOM and it will try to find out the differnce between the old virtual DOM and new virtual DOM in every render cycle.

In React 16 new algorithm came to find out the diff which is known as React Fiber.
