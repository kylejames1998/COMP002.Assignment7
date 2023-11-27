// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
// setting the variable balloon to the element with an ID of "balloon"
let balloon = document.getElementById("balloon");
let size;
// Function that sets the size of the balloon at first
function setSize(newSize) {
    size = newSize;
    // sets the font size to "" px so that the size can actually be increased or decreased (without this the size cannot be changed)
    balloon.style.fontSize = size + "px";
}
// sets the size of the balloon to 15px at start
setSize(15);
// function that handles the arrowUp and arrowDown events
function handleArrow(Event) {
    // checks if the balloon is bigger than 80px, if it is, the balloon is changed to the 💥 emoji.
    if (Event.key == "ArrowUp") {
        if (size > 80) {
            balloon.textContent = "💥";
            // event listener is removed so that the 💥 emoji's size cannot be affected by an arrowup or down event
            document.body.removeEventListener("keydown", handleArrow);
            // if the balloon is smaller than 80px, an arrowUp event will increase the size by 10% and the page scrolling will be prevented (arrow keys scroll the page)
        } else {
            setSize(size * 1.1);
            Event.preventDefault();
        }
        // if the arrow down key is pressed, the size of the balloon will be decreased by 10% (and page scroll will be prevented)
    } else if (Event.key == "ArrowDown") {
        setSize(size * 0.9);
        Event.preventDefault();
    }
}
document.body.addEventListener("keydown" , handleArrow)



// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it


// Variables for tabLinks (links)
let tab1Link = document.getElementById("tab1Link");
let tab2Link = document.getElementById("tab2Link");
let tab3Link = document.getElementById("tab3Link");

// Variables for tabs (divs with content)
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

// Function that initially hides all and then sets the clicked tab to be shown
function showTab(tabToShow) {
    // Hides all tabs initially
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    // shows "clicked tab" after all are set to none
    tabToShow.style.display = "block";
}

// Event listeners for the links
// Link 1 EL
tab1Link.addEventListener("click", function(event) {
    // Prevents navigating to link's href
    event.preventDefault();
    // sets tab1 to show when the tab1 link is clicked
    showTab(tab1);
});

// Link 2 EL
tab2Link.addEventListener("click", function(event) {
    // Prevents navigating to link's href
    event.preventDefault();
    // sets tab2 to show when the tab2 link is clicked
    showTab(tab2);
});

// Link 3 EL
tab3Link.addEventListener("click", function(event) {
    // Prevents navigating to link's href
    event.preventDefault();
    // sets tab3 to show when the tab3 link is clicked
    showTab(tab3);
});

// Function that shows tab1 on page load
window.onload = function() {
    // calls showTab function with tab1 as the parameter so that tab1 will be shown on page load (all are set to none in the above function)
    showTab(tab1); 
};
