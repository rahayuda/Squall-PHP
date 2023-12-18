const form = document.getElementById('crudForm');
const itemList = document.getElementById('itemList');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function addItem() {
    const itemNameInput = document.getElementById('itemName');
    const itemName = itemNameInput.value;

    // Call serverless function to add item to the database
    fetch('/api/addItem', {
        method: 'POST',
        body: JSON.stringify({ itemName }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Update the UI with the new item
        itemList.innerHTML += `<li>${data.itemName} <button onclick="deleteItem('${data.id}')">Delete</button></li>`;
        // Clear the input field
        itemNameInput.value = '';
    });
}

function deleteItem(itemId) {
    // Call serverless function to delete item from the database
    fetch(`/api/deleteItem?id=${itemId}`, {
        method: 'DELETE',
    })
    .then(() => {
        // Remove the item from the UI
        const itemToDelete = document.querySelector(`li[data-id="${itemId}"]`);
        if (itemToDelete) {
            itemToDelete.remove();
        }
    });
}

// Fetch initial items from the serverless function on page load
fetch('/api/getItems')
    .then(response => response.json())
    .then(data => {
        // Update the UI with existing items
        data.forEach(item => {
            itemList.innerHTML += `<li data-id="${item.id}">${item.itemName} <button onclick="deleteItem('${item.id}')">Delete</button></li>`;
        });
    });
