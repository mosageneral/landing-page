/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global letiables
*/

let SectionCount = 0; // The Count Of The sections Count letiable
let NavBar = document.querySelector("#navbar__list"); // The Nav Bar Selector As letiable 

/**
 * End Global letiables
 * Start Helper Functions 
*/
function GetSectionCount() {
    //This Function Gets The Count Of The Sections In The Html So We Can Determind The Count Of The Nav
    SectionCount = document.querySelectorAll('section').length;

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function () {
// This Is The Main Func Thats Gets Triggered On The Page Loads Successfuly

    GetSectionCount(); // First We Get Count Of The Sections 

    BuildNav(); // Socond We Build Our NavBar Based On the Count Of The Sections 

    SetClickForList(); //Socond We Add The Click Event to The 'li' element

    let Section1 = document.getElementById('section1');


    Section1.classList.add('your-active-class'); // Add Active To The First Section 

});

// build the nav
function BuildNav() {

 // In This Function We Build our NavBar Based On Sections Count In The Page
 /*
 Here We Loops On The Count Of The Sections 
 Then we Adds A 'li' And Inside It We Add 'a' 
 Then We Add The Requierd Attrs for The Oparations 
 */
    for (let i = 1; i <= SectionCount; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let SectionId = document.getElementById('section'+i);
        li.appendChild(a);
        li.setAttribute("data-section", "#section" + i);
        li.setAttribute("id", "navLink" + i);
        //Here We Add Click Event For The 'li' Tag And Adds The behavior Of The Function As Smooth
        li.addEventListener("click", ()=>{
            SectionId.scrollIntoView({behavior: "smooth"})
          });
       
        a.setAttribute("class", "button");
        a.text="Section " + i
     

        NavBar.appendChild(li);
    }
}


function SetClickForList() {
// This Func Sets The Event Click On the Li Elements And Triggers The 'GoToSection' Function
    for (i = 0; i <= NavBar.childElementCount - 1; i++) {
        NavBar.children[i].addEventListener("click", AddActiveClass);
    }
}

//Add Active Class On Scroll


// Add class 'active' to section when near top of viewport

function AddActiveClass() {
    //This Func Add The Active Class To The Selected Element
    //First We Remove Active class From Other Section
    const el = document.querySelectorAll('section');
    el.forEach(element =>element.classList.remove('your-active-class'));
  //Then We Add Active Clase For The Selected Section
    let elemnt = document.querySelector(this.dataset.section);
    elemnt.classList.add("your-active-class");
    const elLink = document.querySelectorAll('a');
    elLink.forEach(element =>{
        
        element.classList.remove('selectedLink')
        element.classList.add('button')
    });
   
   let liElement =   document.getElementById(this.id);
   liElement.children[0].classList.remove('button');
   liElement.children[0].classList.add('selectedLink');
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set Li as active On Scroll
let isInViewport = function(elem) {
    let distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  
  let AllSection = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function(event) {

  findMe.forEach(element => {
     
      if (isInViewport(element)) {
      
        
      console.log(element.dataset.li)
      let NavItemId = '#'+element.dataset.li+' a';
      let NavItem = document.querySelector(NavItemId)
      let AllNavItems = document.querySelectorAll('li a')
      AllNavItems.forEach(element =>{
          element.classList.remove('selectedLink')
          element.classList.add('button')
        
        });
      NavItem.classList.remove('button')
      NavItem.classList.add('selectedLink')
      console.log(NavItem)

      }
  });
  
  }, false);
  
