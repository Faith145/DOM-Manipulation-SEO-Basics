let itemsAdded = 0;

document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("myParagraph").innerHTML =
        "I can express my emotions through painting when words aren’t enough. Each color and brushstroke reflects how I feel inside.";
});

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

document.getElementById("removeItemBtn").addEventListener("click", function () {
    const list = document.getElementById("myList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
        if (itemsAdded > 0 && list.children.length < 5) {
            itemsAdded--;
        }
    }
});

