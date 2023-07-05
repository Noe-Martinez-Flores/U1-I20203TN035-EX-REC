const product = {
    name : undefined,
    cuantity : undefined,
    price : undefined,
    cost : (cuantity, price) => {
        return cuantity * price
    }
}
const carShop = {
    product : [],
    folio : "",
    subtotal : 0,
    total : 0,
    calcular : (subtotal) => {
        return subtotal + ( subtotal * 0.16 )
    }
}

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const cuantity = document.querySelector("#cuantity").value;
    const price = document.querySelector("#price").value;
   
    product.name = name;
    product.cuantity = cuantity;
    product.price = price;

    carShop.product.push({...product});
    carShop.subtotal = carShop.subtotal + product.cost(product.cuantity,product.price);

    console.log(carShop)
});

const btnClose = document.querySelector("#btnClose");
btnClose.addEventListener("click", () => {

    const sub = document.querySelector("#sub");
    const total = document.querySelector("#total");

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    carShop.folio = result
    carShop.total = carShop.calcular(carShop.subtotal)

    sub.append(carShop.subtotal);
    total.append(carShop.total)

    console.log(carShop)

})