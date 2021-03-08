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


//NAV BAR--------------------

let navItems = document.querySelectorAll('a'); // this is selecting ALL anchor tags within the nav
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

// turn nav items Green
navItems.forEach(function(currentValue){ 
  currentValue.style.color= "green"; // .style effects CSS properties
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
newATag.style.color = "green";
newATag.style.cursor = "pointer";
newATag2.style.color = 'green';
newATag2.style.cursor = 'pointer';

// CTA SECTION --------------

// Set the heading image 
let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);
//make button 'Get Started'
let ctaButton = document.querySelector('button');
ctaButton.innerHTML = siteContent['cta']['button'];
// cta <h1>DOM<br> Is<br> Awesome</h1>
let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`); // if you do not .join they are not separated by a <br> but by a ','

//MAIN CONTENT -------------------
//address ALL h4's in main-content
let mainH4 = document.querySelectorAll('.main-content .text-content h4');

mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"]; // Is there a way to add two words for ex. "company's vision"? - bracket notation maybe?

// lets address the Paragraphs in main-content
let mainParagraphs = document.querySelectorAll(".main-content .text-content p"); // select class of main-content and text-content and <p> from html

mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// CONTACT-------------

//contactH4
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

//contactP
let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"]
  .split("Street ")
  .join(`Street <br>`);
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

//FOOTER ---------------------------------
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];