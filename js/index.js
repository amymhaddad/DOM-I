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

//IMGAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippet = document.getElementById("cta-img")
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//NAV LINKS
//append and prepend elements to nav
let navItems = document.querySelectorAll("a")
for (let i=0; i<navItems.length; i++) {
  navItems[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
  navItems[i].style.color = 'green';
}

const nav = document.querySelector("nav");
let blogNavItem = document.createElement("a");
nav.appendChild(blogNavItem);
blogNavItem.innerHTML = "Blog";
blogNavItem.style.color = "green";

let locationNavItem = document.createElement("a");
nav.prepend(locationNavItem);
locationNavItem.innerHTML = "Locations";
locationNavItem.style.color = "green";

let introTitle = document.querySelectorAll(".cta-text h1")[0];
introTitle.innerHTML = siteContent["cta"]["h1"];

let introButton = document.querySelectorAll(".cta-text button")[0];
introButton.innerHTML = siteContent["cta"]["button"];

//TOP CONTENT
let topContentHeaders = document.querySelectorAll(".top-content .text-content h4");
topContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];

let topContentParas = document.querySelectorAll(".top-content .text-content p");
topContentParas[0].innerHTML = siteContent["main-content"]["features-content"];
topContentParas[1].innerHTML = siteContent["main-content"]["about-content"];

//BOTTOM CONTENT
let bottomContentHeaders = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContentParas = document.querySelectorAll(".bottom-content .text-content p");
bottomContentParas[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentParas[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentParas[2].innerHTML = siteContent["main-content"]["vision-content"];

//CONTACT and FOOTER
let contact = document.querySelectorAll(".contact p");
contact[0].innerHTML = siteContent["contact"]["address"]
contact[1].innerHTML = siteContent["contact"]["phone"]
contact[2].innerHTML = siteContent["contact"]["email"]

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"]

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];