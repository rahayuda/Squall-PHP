// deleteItem.js
let items = [];  // Array untuk menyimpan item

module.exports = (req, res) => {
    const { id } = req.query;

    // Mencari indeks item dengan id yang sesuai dalam array
    const indexToDelete = items.findIndex(item => item.id === id);

    if (indexToDelete !== -1) {
        // Menghapus item dari array jika ditemukan
        items.splice(indexToDelete, 1);
        res.status(200).send('Item deleted successfully');
    } else {
        // Memberikan respons bahwa item tidak ditemukan
        res.status(404).send('Item not found');
    }
};
