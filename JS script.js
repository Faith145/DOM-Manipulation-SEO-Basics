// Track how many items have been added
let itemsAdded = 0;

// Change the paragraph to the shorter version
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("myParagraph").innerHTML =
        "I can express my emotions through painting when words aren’t enough. Each color and brushstroke reflects how I feel inside.";
});

// Add a new list item in order (Digital Painting → Spray Painting)
document.getElementById("addItemBtn").addEventListener("click", function () {
    const list = document.getElementById("myList");

    if (itemsAdded === 0) {
        const item = document.createElement("li");
        item.textContent = "Digital Painting";
        list.appendChild(item);
        itemsAdded++;
    } else if (itemsAdded === 1) {
        const item = document.createElement("li");
        item.textContent = "Spray Painting";
        list.appendChild(item);
        itemsAdded++;
    } else {
        alert("All painting types have been added.");
    }
});

// Remove the last list item and track how many were removed
document.getElementById("removeItemBtn").addEventListener("click", function () {
    const list = document.getElementById("myList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        if (itemsAdded > 0 && list.children.length < 5) {
            itemsAdded--;
        }
    }
});
