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


/* === Rotating roles === */
(function(){
  const el = document.getElementById('home-rotating');
  if(!el) return;
  const roles = [
    "AI Engineer & Developer",
    "Turning Data into Vision",
    "AI & ML Professional",
    "M.Tech Artificial Intelligence"
  ];
  let idx = 0, char = 0, erasing = false, pause = 0;
  const type = () => {
    const full = roles[idx];
    if (pause > 0){ pause--; return requestAnimationFrame(type); }
    if (!erasing){
      char++;
      el.textContent = full.slice(0,char);
      if (char === full.length){ erasing = true; pause = 40; }
    } else {
      char--;
      el.textContent = full.slice(0,char);
      if (char === 0){ erasing = ; idx = (idx+1)%roles.length; pause = 10; }
    }
    setTimeout(type, erasing ? 35 : 55);
  };
  type();
})();


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
  let i = 0, j = 0, deleting = false;

  function tick(){
    const full = roles[i];
    if(!deleting){
      j++;
      el.textContent = full.slice(0, j);
      if(j === full.length){
        deleting = true;
        setTimeout(tick, 1200); // pause at end
        return;
      }
    } else {
      j--;
      el.textContent = full.slice(0, j);
      if(j === 0){
        deleting = false;
        i = (i + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 70);
  }
  tick();
})();

