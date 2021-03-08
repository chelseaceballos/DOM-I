const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4" : "Contact",
    address : "123 Way 456 Street Somewhere, USA",
    phone : "1 (888) 888-8888",
    email : "sales@greatidea.io",
  },
  footer: {
    copyright : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]); // setting logo img in nav bar

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']["middle-img-src"]); // setting middleImage in main-content


//NAV BAR
let navItems = document.querySelectorAll('a'); // this is selecting ALL anchor tags within the nav
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

// turn nav items Grey
navItems.forEach(function(currentValue){ 
  currentValue.style.color= "grey"; // .style effects CSS properties
});

// select the nav to work on
let nav = document.querySelector('nav'); 
// creating new A Tag (1st) Prepend
const newATag = document.createElement('a'); // important that you reference an anchor tag and not nav itself
newATag.textContent = "Prepend";
nav.prepend(newATag);

// Create new A Tag (2nd) Append
const newATag2 = document.createElement('a');
newATag2.textContent = "Append";
nav.append(newATag2);
// add .style to match color and new cursor
newATag.style.color = "grey";
newATag.style.cursor = "pointer";
newATag2.style.color = 'grey';
newATag2.style.cursor = 'pointer';

// CTA SECTION

// Set the heading image
let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);
