const products = {
    p0: {
        id: 'p0',
        name: 'pencil',
        cost: 1
    },
    p1: {
        id: 'p1',
        name: 'pen',
        cost: 2
    },
    p2: {
        id: 'p2',
        name: 'marker'
    },
    p3: {
        id: 'p3',
        name: 'charcoal'
    },
    p4: {
        id: 'p4',
        name: 'paper'
    }
}

const shoppingCart = [];

function addProductToShoppingCart(productName, quantity) {
    const productId = findProductByName(productName);
    shoppingCart.push({
        productId: productId,
        quantity: quantity
        })
}

function findProductByName(productName) {
    for (const productId in products) {
        const product = products[productId];
        if (product.name === productName) {
            return productId;
        }
    }
}

function printShoppingCart() {
    console.log("Shopping Cart");
    for (const item of shoppingCart) {
        const product = products[item.productId];
        console.log(`${item.quantity} of (${product.id}) ${product.name}`)
    }
    console.log("End of Shopping Cart");
}

addProductToShoppingCart('pencil', 1);
console.log(shoppingCart);
printShoppingCart();
addProductToShoppingCart('charcoal', 1);
printShoppingCart();
