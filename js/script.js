/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
//Global variables for list of students
const listContainer = document.querySelector('.student-list');
//Global variable for list of buttons
const linkList = document.querySelector('.link-list');
const itemsPerPage = 9;
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//Renders student cards to page depending on what number button is clicked
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;

   //Sets listContainer to empty, so that student cards do not accumulate
   listContainer.innerHTML = '';

   //Iterates through data array and uses properties of the array to create an html string
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {

         const html = `
         <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${data[i].picture.medium}" alt="Profile Picture">
            <h3>${data[i].name.first} ${data[i].name.last}</h3>
            <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">${data[i].registered.date}</span>
         </div>
         </li>`
         //Creates the DOM elements needed to display the information for each student
         listContainer.insertAdjacentHTML("beforeend", html);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   //select 9 students per page
   const numOfButtons = Math.ceil(list.length / itemsPerPage);

   //Sets list of buttons to empty, so the buttons don't accumulate
   linkList.innerHTML= "";
   
   //Creates a list of buttons 
   for (let i = 1; i <= numOfButtons; i++) {
      const html = `
         <li>
             <button type="button" >${i}</button>
         </li>`;

      //Adds buttons to the ul (i.e. linklist)
      linkList.insertAdjacentHTML("beforeend", html);
      
   }
   //Adds active class to first element as the starting point
   linkList.querySelector("button").classList.add("active");
}
/* Adds 'active' class to clicked button and remove it from set default.
Calls the showPage function with new parameters based on user's clicks
*/
linkList.addEventListener("click", (event) => {
   const activeButton = linkList.querySelector(".active");
   const buttonClicked = event.target.closest("button");

   if (buttonClicked) {
      activeButton.classList.remove("active");
      buttonClicked.classList.add("active");
      showPage(data, buttonClicked.innerHTML);
   }
});


// function addSearch(){
//    const html = `<label for="search" class="student-search">
//    <span>Search by name</span>
//    <input id="search" placeholder="Search by name...">
//    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
//  </label>`;
// }

// document.querySelector('header');

// for (let i=0; i< ; i++)

// listContainer.inser

// const studentSearch = document.getElementById('')

   // Call functions
   addPagination(data);
   showPage(data, 1);