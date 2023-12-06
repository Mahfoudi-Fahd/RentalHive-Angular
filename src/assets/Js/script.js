  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownContainer = document.getElementById('dropdown');

  const devicesDropdownButton = document.getElementById('devices-dropdown-button');
  const devicesDropdownContainer = document.getElementById('devices-dropdown');

  const burgerDropdownButton = document.getElementById('burger-dropdown-button');
  const burgerDropdownContainer = document.getElementById('burger-dropdown');

  // Search Dropdown
  dropdownButton.addEventListener('click', () => {


      dropdownContainer.classList.toggle('hidden');

      if(!devicesDropdownContainer.classList.contains('hidden')){
          devicesDropdownContainer.classList.toggle('hidden');
      }
      if(!burgerDropdownContainer.classList.contains('hidden')){
          burgerDropdownContainer.classList.toggle('hidden');
      }

  });
  //  devices Dropdown
    devicesDropdownButton.addEventListener('click', () => {



      devicesDropdownContainer.classList.toggle('hidden');
      
      
      if(!dropdownContainer.classList.contains('hidden')){
          dropdownContainer.classList.toggle('hidden');
      }
      if(!burgerDropdownContainer.classList.contains('hidden')){
          burgerDropdownContainer.classList.toggle('hidden');
      }
  });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        devicesDropdownContainer.classList.add('hidden');
        dropdownContainer.classList.add('hidden');;
    }}

    //  burger dropdown
    burgerDropdownButton.addEventListener('click', () => {



      burgerDropdownContainer.classList.toggle('hidden');
      
      
      if(!dropdownContainer.classList.contains('hidden')){
          dropdownContainer.classList.toggle('hidden');
      }
      if(!devicesDropdownContainer.classList.contains('hidden')){
          devicesDropdownContainer.classList.toggle('hidden');
      }
      
      
    });


    //hide burger dropdown on resizing > 600px
    // if (window.innerWidth > 600) {
    //     burgerDropdownContainer.classList.add('hidden');
    //   }

    //hide dropdowns on scroll
  var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        devicesDropdownContainer.classList.add('hidden');
        dropdownContainer.classList.add('hidden');
    }
    }