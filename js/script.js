const affirmations = [
  "You got this",
  "You'll figure it out",
  "You're a smart cookie",
  "I believe in you",
  "Sucking at something is the first step towards being good at something",
  "Struggling is part of learning",
  "Everything has cracks - that's how the light gets in",
  "Mistakes don't make you less capable",
  "We are all works in progress",
  "You are a capable human",
  "You know more than you think",
  "10x engineers are a myth",
  "If everything was easy you'd be bored",
  "I admire you for taking this on",
  "You're resourceful and clever",
  "You'll find a way",
  "I know you'll sort it out",
  "Struggling means you're learning",
  "You're doing a great job",
  "It'll feel magical when it's working",
  "I'm rooting for you",
  "Your mind is full of brilliant ideas",
  "You make a difference in the world by simply existing in it",
  "You are learning valuable lessons from yourself every day",
  "You are worthy and deserving of respect",
  "You know more than you knew yesterday",
  "You're an inspiration",
  "Your life is already a miracle of chance waiting for you to shape its destiny",
  "Your life is about to be incredible",
  "Nothing is impossible. The word itself says 'I’m possible!'",
  "Failure is just another way to learn how to do something right",
  "I give myself permission to do what is right for me",
  "You can do it",
  "It is not a sprint, it is a marathon. One step at a time",
  "Success is the progressive realization of a worthy goal",
  "People with goals succeed because they know where they’re going",
  "All you need is the plan, the roadmap, and the courage to press on to your destination",
  "The opposite of courage in our society is not cowardice... it is conformity",
  "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
  "The past does not equal the future",
  "The path to success is to take massive, determined action",
  "It’s what you practice in private that you will be rewarded for in public",
  "Small progress is still progress",
  "Don't worry if you find flaws in your past creations, it's because you've evolved",
  "Starting is the most difficult step - but you can do it",
  "Don't forget to enjoy the journey",
  "It's not a mistake, it's a learning opportunity",
];
console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    };
    // Open in new tab and add target attribute
    if (href !== "#" && href.startsWith("https")) {
      link.target = '_blank';
      window.open(link.href, '_blank');
    };
    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////////////////////////////////////////////
// Random affirmation sentence
random();
// expected output: Daily affirmation sentence


// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
