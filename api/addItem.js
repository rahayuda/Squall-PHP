module.exports = (req, res) => {
    const { itemName } = req.body;

    // In a real application, you would use a proper database here
    const newItem = {
        id: Date.now().toString(),
        itemName,
    };

    res.status(200).json(newItem);
};
