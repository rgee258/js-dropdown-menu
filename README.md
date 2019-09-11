# Dropdown Menu

This repository contains a dropdown navigation menu template that can be reused as needed. No external libraries or packages are needed for usage.

Check it out [here](https://rgee258.github.io/js-dropdown-menu/).

This project is done following The Odin Project, which can
be found [here](https://www.theodinproject.com/courses/javascript/lessons/dynamic-user-interface-interactions).

## Important

The script used for controlling the dropdown menu is available as a module, and as such is blocked in Chrome normally due to its CORS policy. As a result this repository is bundled using webpack for module usage. Bear this in mind if you are interested in using the provided dropdown menu.

## Usage

The dropdown menu functions where if a user clicks on a menu item that contains dropdown content, the dropdown will appear under it. Moving the cursor out of the displayed dropdown or out of the overall dropdown navigation. Only one dropdown is displayed at a time.

Reusage of the menu only requires the following components:

* The template menu found in index.html
* The denoted dropdown styling in css/style.css
* The dropdownMenu module in modules/dropdown_menu.js

Comments for adapting the size of the dropdown menu based on styling preferences are included in the css file.

## Additional Notes

* Bundling for this app was done using webpack.
* The following webpack loaders were used:
  * css-loader
  * style-loader