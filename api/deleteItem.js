module.exports = (req, res) => {
    const { id } = req.query;

    // In a real application, you would delete the item from the database here

    res.status(200).send('Item deleted successfully');
};
