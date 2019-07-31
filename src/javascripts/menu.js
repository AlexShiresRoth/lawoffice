import { Selectors } from './Selectors';


//scrolling navbar module
export const scrollToSection = event => {
    event.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };
  
  export const switchNavIcon = () => {
    const icons = [`<i class="bars icon"></i>`, `<i class="x icon"></i>`];
    if (Selectors.navAppear.classList.contains("visible")) {
      Selectors.navIcon.innerHTML = icons[1];
    } else {
      Selectors.navIcon.innerHTML = icons[0];
    }
  };
  
  export const toggleDropDown = () => {
    Selectors.dropDown.addEventListener("click", e => {
      e.stopPropagation();
      Selectors.serviceUl.classList.toggle("hidden");
      Selectors.serviceUl.classList.toggle("show");
    });
  };
  toggleDropDown();
  
  export const closeDropdown = () => {
    document.addEventListener("click", e => {
      e.stopPropagation();
      if (Selectors.serviceUl.classList.contains("show")) {
        Selectors.serviceUl.classList.remove("show");
        Selectors.serviceUl.classList.add("hidden");
      }
    });
  };
  closeDropdown();
  
  //Mobile navbar slidetoggle
  
  export const slideToggleNav = () => {
    Selectors.mobileNav.addEventListener("click", () => {
      Selectors.navAppear.classList.toggle("invisible");
      Selectors.navAppear.classList.toggle("visible");
      switchNavIcon();
    });
  };
  slideToggleNav();
  