const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "middle-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
// Nav
let navLinks = document.querySelectorAll("header nav a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav["nav-item-" + (i + 1)];
  navLinks[i].classList.add("italic");
}
//CTA Content
document.querySelector("section.cta div.cta-text").children[0].textContent = siteContent.cta["h1"];
document.querySelector("section.cta div.cta-text").children[1].textContent = siteContent.cta["button"];
//Main Content
document.querySelectorAll("div.text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelectorAll("div.text-content h4")[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelectorAll("div.text-content h4")[2].textContent = siteContent["main-content"]["services-h4"];
document.querySelectorAll("div.text-content h4")[3].textContent = siteContent["main-content"]["product-h4"];
document.querySelectorAll("div.text-content h4")[4].textContent = siteContent["main-content"]["vision-h4"];
document.querySelectorAll("div.text-content p")[0].textContent = siteContent["main-content"]["features-content"];
document.querySelectorAll("div.text-content p")[1].textContent = siteContent["main-content"]["about-content"];
document.querySelectorAll("div.text-content p")[2].textContent = siteContent["main-content"]["services-content"];
document.querySelectorAll("div.text-content p")[3].textContent = siteContent["main-content"]["product-content"];
document.querySelectorAll("div.text-content p")[4].textContent = siteContent["main-content"]["vision-content"];
//Contact
document.querySelector("section.contact").children[0].textContent = siteContent.contact["contact-h4"];
document.querySelector("section.contact").children[1].textContent = siteContent.contact["address"];
document.querySelector("section.contact").children[2].textContent = siteContent.contact["phone"];
document.querySelector("section.contact").children[3].textContent = siteContent.contact["email"];
//Footer
document.querySelector("footer a").textContent = siteContent.footer.copyright;
document.querySelector("footer a").classList.add("bold");
// Images
for (let id in siteContent.images) {
  document.getElementById(id).setAttribute("src", siteContent.images[id]);
}