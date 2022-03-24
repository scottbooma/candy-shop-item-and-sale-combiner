function getItemById(items, id) {
    return items.find(item => item.id === id)
}

function buildTransactions(sales, items) {
    return sales.map(sale => {
        const itemId = sale.itemId
        const item = getItemById(items, itemId)

        return {
            itemId: sale.itemId,
            description: item.description,
            price: item.price,
            quantity: sale.quantity,
        }
    })
}

function getTransactionsByItemDescription(transactions, description) {
    return transactions.filter(transaction => transaction.description === description)
}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
