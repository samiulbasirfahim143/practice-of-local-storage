const checkData = () => {
    const cart = window.localStorage.cart;
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    } else {
        cartObject = {};
    }
    return cartObject;
};

const getProduct = () => {
    const productField = document.getElementById("product");
    const product = productField.value;
    productField.value = ``;
    return product;
};
const saveData = () => {
    const product = getProduct();
    const cart = checkData();
    if (cart[product]) {
        cart[product] = cart[product] + 1;
    } else {
        cart[product] = 1;
    }
    const stringified = JSON.stringify(cart);
    localStorage.setItem("cart", stringified);
    const display = document.getElementById('prodsdisp')
    display.textContent=``
    loadData(cart)
};

const displaydata = (product,value) => {
    const display = document.getElementById('prodsdisp')
    const li = document.createElement('li')
    li.innerHTML = `${product} : ${value}`
    display.appendChild(li)
};
const loadData = (cart) => {
    for (const product in cart) {
        const value = cart[product]
        displaydata(product,value)
    }
};

const getData = ()=>{
    const cart = checkData()
    loadData(cart)
}

getData()