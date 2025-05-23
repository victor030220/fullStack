"use strict";
;
const messageProduct = function (item) {
    console.log(`Este es el arituco ${item.name} y tiene un precio de $${item.price}.`);
    console.log(`Actualmente contamos con un stock de: ${item.stock} unidades.`);
};
let myCart = {
    products: [],
    addItem(item) {
        this.products.push(item);
    },
    deleteItem(id) {
        let indexToDelete;
        indexToDelete = this.products.findIndex(pro => pro.id === id);
        if (indexToDelete !== -1)
            this.products.splice(indexToDelete, 1);
        else
            console.log("No se econtro el articulo seleccionado.");
    },
    total() {
        let total = 0;
        this.products.forEach((item) => {
            total += item.amount * item.product.price;
        });
        return total;
    },
    viewAllItems() {
        this.products.forEach((item) => {
            messageProduct(item.product);
        });
    },
    viewAnItem(id) {
        let idIndex;
        idIndex = this.products.findIndex((item) => {
            return item.id === id;
        });
        if (idIndex !== -1)
            messageProduct(this.products[idIndex].product);
        else
            console.log(`El id ${id} no pertenece a un articulo del carrito actualmente.`);
    }
};
myCart.products = [{ id: 1, product: { name: "Coca Cola", price: 56, stock: 12 }, amount: 1 }, { id: 2, product: { name: "Manaos", price: 40, stock: 6 }, amount: 22 }];
myCart.viewAllItems();
console.log("-------------------------------------------------------------------");
console.log(`El total del carrito es de $${myCart.total()}`);
console.log("-------------------------------------------------------------------");
myCart.viewAnItem(1);
console.log("-------------------------------------------------------------------");
myCart.deleteItem(1);
myCart.viewAllItems();
