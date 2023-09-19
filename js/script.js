/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const listContainer = document.querySelector('.student-list');//same as author container
const linkList = document.querySelector('.link-list');
const itemsPerPage = 9;
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//Renders student cards to page
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;

   listContainer.innerHTML = '';

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
         </li>`;
         //Create the DOM elements needed to display the information for each matching student as you iterate over the list parameter. 
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

   linkList.innerHTML= "";
   
   //Creates a button for every page
   for (let i = 1; i <= numOfButtons; i++) {
      const html = `
         <li>
             <button type="button" >${i}</button>
         </li>`;

      linkList.insertAdjacentHTML("beforeend", html);
      
   }
   //add active class to first element
   linkList.querySelector("button").classList.add("active");
}

linkList.addEventListener("click", (event) => {
   const activeButton = linkList.querySelector(".active");
   const buttonClicked = event.target.closest("button");

   if (buttonClicked) {
      activeButton.classList.remove("active");
      buttonClicked.classList.add("active");
      showPage(data, buttonClicked.innerHTML);
   }
});


function addSearch(){
   const html = `<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;
}

   // Call functions
   addPagination(data);
   showPage(data, 1);