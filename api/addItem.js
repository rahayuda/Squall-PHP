// addItem.js
let items = [];  // Array untuk menyimpan item

module.exports = (req, res) => {
    const { itemName } = req.body;

    // Membuat objek item baru
    const newItem = {
        id: Date.now().toString(),
        itemName,
    };

    // Menambahkan item ke dalam array
    items.push(newItem);

    // Mengembalikan item baru
    res.status(200).json(newItem);
};
