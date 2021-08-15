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
 * Define Global Variables
*/

let SectionCount = 0; // The Count Of The sections Count Variable
let NavBar = document.querySelector("#navbar__list"); // The Nav Bar Selector As Variable 

/**
 * End Global Variables
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

    var Section1 = document.getElementById('section1');


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
        var li = document.createElement("li");
        var a = document.createElement("a");
        li.appendChild(a);
        li.setAttribute("data-section", "#section" + i);
        li.setAttribute("id", "navLink" + i);
        a.setAttribute("href", "#section" + i);
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

// Add class 'active' to section when near top of viewport

function AddActiveClass() {
    //This Func Add The Active Class To The Selected Element
    //First We Remove Active class From Other Section
    const el = document.querySelectorAll('section');
    el.forEach(element =>element.classList.remove('your-active-class'));
  //Then We Add Active Clase For The Selected Section
    var elemnt = document.querySelector(this.dataset.section);
    elemnt.classList.add("your-active-class");
    const elLink = document.querySelectorAll('a');
    elLink.forEach(element =>{
        
        element.classList.remove('selectedLink')
        element.classList.add('button')
    });
   
   var liElement =   document.getElementById(this.id);
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

// Set sections as active


