// Save Bookmark
function saveBookmark(e){
//Prevent from page reloading;
e.preventDefault();
    // Get site name and url
var siteName = document.querySelector("siteName").value;
var siteUrl = document.querySelector("siteUrl").value;


// Create a bookmark object
var bookmark = {
    name: siteName,
    url: siteUrl
};

// Store bookmark
var bookmarks = [];

// Check if local storage is empty
if(localStorage.getItem("bookmarks") !=== null){
    // Get bookmarks from local storage
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
}
// Adding new bookmark
bookmarks.push(bookmark);

// Update bookmarks in local storage
localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

// Fetch bookmarks
fetchBookmarks();

// Empty the inputs
document.querySelector("form").reset();
}

// Fetch bookmarks
function fetchBookmarks(){
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
// Select the output bookmarks div
var output = document.querySelector("bookmarks");

// Reset the bookmarks div
output.innerHTML = "";

// Loop over Bookmarks
for(var i=0;i<bookmarks.length;i++){
var div = document.createElement("div");
// Create h3 with bookmark name as content
var h3 = document.createElement("h3");
h3.textContent = bookmarks[i].name;

//  Create visit link
var a = document.createElement("a");
a.href = bookmarks[i].url;
a.className = "btn btn - success";
a.textContent = "Visit";

//  Create delete button
var button = document.createElement("button");
button.className = "btn btn-danger";
button.textContent = "Delete";

//  Add event listener to delete button
button.addEventListener("click",function(e) {
var name = e.target.parentElement.children[0].textContent;
deleteBookmark(name);
});

//  Append h3, a into div
div.appendChild(h3);
div.appendChild(a);
div.appendChild(button);    

// Append div into output
output.appendChild(div);
    }
}

//  Delete bookmark
function deleteBookmark(name) {
// Get bookmarks from local storage
var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

//  Loop over boomarks
for (var i=0;i<bookmarks.length;i++){
    //  looking up bookmark with given name, then delete it
    if (bookmarks[i].name === name) {
        bookmarks.splice(i, 1) {
            break;
        }
    }
// Update localStorage
localStorage.seyItem("bookmarks", JSON.stringify(bookmarks));

// re-fetch bookmarks output
fetchBookmarks();
}






// Adding event listener to submit button
document.querySelector("form").addEventListener("submit", saveBookmark);
 
// Adding event listener to page loading
window.addEventListener("load", fetchBookmarks);

// Adding event listener for filter input
filter.addEventListener("input", filterBookmarks);

// Select all bookmarks name
var bookmarks = document.querySelectorAll("Bookmarks di")

