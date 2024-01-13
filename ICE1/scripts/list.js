// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element

var groceryList = document.getElementById("groceries");

// ADD NEW ITEMS TO END OF LIST
// Create element
var newListItem = document.createElement("li");
// Create text node
var textNode = document.createTextNode("HotDog");
// Add text node to element
newListItem.appendChild(textNode);
// Add element end of list
groceryList.appendChild(newListItem);

// ADD NEW ITEMS START OF LIST
// Create element
var newListItem = document.createElement("li");
// Create text node
var textNode = document.createTextNode("Pizza");
// Add text node to element
newListItem.appendChild(textNode);
// Add element to list
groceryList.insertBefore(newListItem, groceryList.firstChild);
// All <li> elements
var newListItem = document.createElement("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var list = groceryList.children;
var count = 0
// Loop through elements
for (var i = 0; i < list.length; i++) {
    // Change class to cool
    list[i].setAttribute("class", "COOL");
    count++;
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var page = document.getElementById("page");
// h2 text
var newListItem = document.createElement("h2");
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup
newListItem.innerHTML = ("Count: " + count);
page.insertBefore(newListItem, page.firstChild);