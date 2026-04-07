/*=============== HOME SPLIT TEXT ===============*/


/*=============== SWIPER PROJECTS ===============*/


/*=============== WORK TABS ===============*/


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/


/* === Basic mobile nav toggle === */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', ()=> navMenu.classList.toggle('show-menu'));
}


/* === Rotating roles (typewriter) === */
(function(){
  const el = document.getElementById('home-rotating');
  if(!el) return;

  const roles = [
    "AI Engineer & Developer",
    "Turning Data into Vision",
    "AI & ML Professional",
    "M.Tech Artificial Intelligence"
  ];

  let roleIndex = 0;
  let cursor = 0;
  let deleting = false;

  const TYPE_DELAY = 70;    // ms per character while typing
  const ERASE_DELAY = 42;   // ms per character while deleting
  const HOLD_DELAY = 1100;  // pause when a word is fully typed
  const GAP_DELAY = 400;    // pause before typing the next word

  function tick(){
    const text = roles[roleIndex];

    // move cursor
    cursor += deleting ? -1 : 1;
    el.textContent = text.slice(0, cursor);

    // choose next delay
    if (!deleting && cursor === text.length){
      deleting = true;
      return setTimeout(tick, HOLD_DELAY);
    }
    if (deleting && cursor === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(tick, GAP_DELAY);
    }

    setTimeout(tick, deleting ? ERASE_DELAY : TYPE_DELAY);
  }

  // slight lead-in so first draw doesn't feel abrupt
  setTimeout(tick, 250);
})();
