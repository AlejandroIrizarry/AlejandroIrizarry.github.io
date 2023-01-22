/* 
 * Menu icon display
 */
function myFunction(x) {
  x.classList.toggle("change");
}

/*
 * Menu items display
 */
const activate = document.getElementsByClassName('menubtn-container')[0]
const navigationitems = document.getElementsByClassName('navigation-items')[0]

activate.addEventListener('click', () => {
    navigationitems.classList.toggle('active')
})

/*
 * Scrolling Animation
*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
       entry.target.classList .remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

