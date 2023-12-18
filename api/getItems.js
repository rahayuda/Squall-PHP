// getItems.js
let items = [];  // Array untuk menyimpan item

module.exports = (req, res) => {
    // Mengembalikan seluruh array item
    res.status(200).json(items);
};
