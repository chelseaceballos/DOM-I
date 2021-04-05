const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
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
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// middle image
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']["middle-img-src"])

//NAV BAR
let navItems = document.querySelectorAll('a');
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

  // PREPEND & APPEND
  let nav = document.querySelector('nav'); 
  const newATag = document.createElement('a')
  newATag.textContent = 'Prepend'
  nav.prepend(newATag)

  const newATag2 = document.createElement('a')
  newATag2.textContent = "Append"
  nav.append(newATag2)
  // turn new attrs green
  newATag.style.color = 'green'
  newATag.style.cursor = 'pointer'
  newATag2.style.color = 'green'
  newATag2.style.cursor = 'pointer'

  // CALL TO ACTION SECTION
  //add cta-img 
  let ctaImage = document.getElementById("cta-img")
  ctaImage.setAttribute('src', siteContent['cta']['img-src'])
  //add cta button
  let ctaButton = document.querySelector('button')
  ctaButton.innerHTML = siteContent['cta']['button']
  // CTA caption above button
  let ctaHeader = document.querySelector('h1')
  ctaHeader.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);

  // MAIN PAGE CONTENT 
  // Add titles to 'cards' h4
  let contentItems = document.querySelectorAll('h4')
  contentItems[0].textContent = siteContent['main-content']['features-h4'];
  contentItems[1].textContent = siteContent['main-content']['about-h4'];
  contentItems[2].textContent = siteContent['main-content']['services-h4'];
  contentItems[3].textContent = siteContent['main-content']['product-h4'];
  contentItems[4].textContent = siteContent['main-content']['vision-h4'];
  // add Paragraphs to the 
  let mainParagraphs = document.querySelectorAll('p')
  mainParagraphs[0].textContent = siteContent['main-content']["features-content"]
  mainParagraphs[1].textContent = siteContent['main-content']["about-content"]
  mainParagraphs[2].textContent = siteContent['main-content']["services-content"]
  mainParagraphs[3].textContent = siteContent['main-content']["product-content"]
  mainParagraphs[4].textContent = siteContent['main-content']["vision-content"]

  //FOOTER
  //contact section
  let h4Contact = document.querySelector('.contact h4')
  h4Contact.textContent = siteContent['contact']['contact-h4'];

  // Add the address and contact info
  let contactP = document.querySelectorAll('.contact p');
    contactP[0].innerHTML = siteContent["contact"]["address"]
    .split("Street")
    .join(`Street <br>`)
    contactP[1].innerHTML = siteContent["contact"]["phone"]
    contactP[2].innerHTML = siteContent["contact"]["email"]

  //Copyright Footer
  let footer = document.querySelector('footer p')
    footer.innerHTML = siteContent['footer']['copyright']
    

