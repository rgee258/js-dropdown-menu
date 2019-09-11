const dropdownMenu = (() => {

  function addToggles() {
    let labels = document.querySelectorAll('.dd-label');
    let dropdowns = document.querySelectorAll('.dd-content');

    // Add label click to remove displayed menus and then show the new one
    labels.forEach(function(label) {
      label.addEventListener('click', function() {
        removeMenus();
        showDropdown(label);
      });
    });

    // Remove the dropdown when the mouse leaves its contents
    dropdowns.forEach(function(dd) {
      dd.addEventListener('mouseleave', function() {
        removeMenus();
      });
    });

    // If the mouse never enters the content, remove it when we leave the menu
    document.querySelector('.dropdown-menu')
      .addEventListener('mouseleave', function() {
        removeMenus();
      }
    );

  }

  function showDropdown(label) {
    // Each label list item will have only two children: the span text and
    // the dropdown list so the last child will always be the dropdown
    let dropdown = label.lastElementChild;
    dropdown.classList.add('show-dd');
  }

  function removeMenus() {
    let shown = document.querySelectorAll('.show-dd');

    shown.forEach(function(dd) {
      dd.classList.remove('show-dd');
    });
  }

  return { addToggles };

})();

export { dropdownMenu }
