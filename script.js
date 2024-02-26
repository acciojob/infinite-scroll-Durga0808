document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");

    // Function to add new list items
    function addListItem() {
        for (let i = 0; i < 2; i++) {
            const newItem = document.createElement("li");
            newItem.textContent = "List Item";
            list.appendChild(newItem);
        }
    }

    // Add 10 list items by default
    for (let i = 1; i <= 10; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = "List Item "+i;
        list.appendChild(newItem);
    }

    // Function to check if user reached end of list
    function checkEndOfList() {
        const lastItem = list.lastElementChild;
        const lastItemRect = lastItem.getBoundingClientRect();
        if (lastItemRect.bottom <= window.innerHeight) {
            addListItem();
        }
    }

    // Event listener to check for scrolling and add more list items
    window.addEventListener("scroll", function() {
        checkEndOfList();
    });
});
