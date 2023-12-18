module.exports = (req, res) => {
    // In a real application, you would fetch items from the database here
    const items = [
        { id: '1', itemName: 'Item 1' },
        { id: '2', itemName: 'Item 2' },
    ];

    res.status(200).json(items);
};
