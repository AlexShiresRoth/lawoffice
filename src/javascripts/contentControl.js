import { Titles, Content } from "./Content.js";
import { Selectors, getServicesList } from "./Selectors.js";

//render services list array to page
export let renderServicesList = () => {
  console.log(renderServicesList, "works");

  let serviceList = getServicesList();

  for (let title = 0; title < serviceList.length; title++) {
    serviceList[title].textContent = Titles.serviceTitles[title];
  }
};

//render content to service list
export let getContent = (arr, text, title) => {
  for (let i = 0; i < arr.length; i++) {
    Selectors.boxesTitle.innerHTML = title;
    arr[i].innerHTML = text[i];
  }
};

//add active class to content select links in services section
export let addActiveClass = () => {
  let services = getServicesList();
  //cycle through services nav lis
  for (let li of services) {
    li.addEventListener("click", () => {
      let current = document.getElementsByClassName("active");

      current[0].className = current[0].className.replace("active", "");
      li.classList.add("active");
    });
  }
};

//add content to services boxes by calling to API
export let addContent = () => {
  let servicesList = getServicesList();
  //nodelist of services boxes
  let boxArr = Selectors.boxes;

  for (let item of servicesList) {
    item.addEventListener("click", function() {
      if (this.textContent === Titles.serviceTitles[0]) {
        return getContent(boxArr, Content.wills, Titles.serviceTitles[0]);
      }
      if (this.textContent === Titles.serviceTitles[1]) {
        return getContent(boxArr, Content.realestate, Titles.serviceTitles[1]);
      }
      if (this.textContent === Titles.serviceTitles[2]) {
        return getContent(boxArr, Content.probate, Titles.serviceTitles[2]);
      }
      if (this.textContent === Titles.serviceTitles[3]) {
        return getContent(boxArr, Content.estate, Titles.serviceTitles[3]);
      }
      if (this.textContent === Titles.serviceTitles[4]) {
        return getContent(boxArr, Content.business, Titles.serviceTitles[4]);
      }
      if (this.textContent === Titles.serviceTitles[5]) {
        return getContent(boxArr, Content.bankruptcy, Titles.serviceTitles[5]);
      } else {
        console.log(`no match`);
      }
    });
  }
};

//scrolling navbar module
export let scrollToSection = event => {
  event.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};
// DRY this badboy up
Selectors.anchors[0].aboutAnchor.addEventListener("click", () => {
  scrollToSection(Selectors.sections[0]);
});
Selectors.anchors[0].servicesAnchor.addEventListener("click", () => {
  scrollToSection(Selectors.sections[1]);
});
Selectors.anchors[0].contactAnchor.addEventListener("click", () => {
  scrollToSection(Selectors.sections[3]);
});

//Mobile navbar slidetoggle

export let slideToggleNav = () => {
  Selectors.mobileNav.addEventListener("click", () => {
    Selectors.navAppear.classList.toggle("visible");
  });
};
slideToggleNav();
