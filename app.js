console.log("connected");
const getProduct = () => {
    const productInputField = document.getElementById("product");
    const product = productInputField.value;
    productInputField.value = ``;
    return product;
};
const displayProduct = (product) => {
    const dispay = document.getElementById("prodsdisp");
    const newEle = document.createElement("li");
    newEle.innerText = product;
    dispay.appendChild(newEle);
};
const addProductOnCart = () => {
    const product = getProduct();
    displayProduct(product);
    saveData(product)
};

const checkCart = ()=>{
    const cart = window.localStorage.cart;
    let cartObj
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj = {}
    }
    return cartObj
}

const saveData = product =>{
    const cart = checkCart();
    if(cart[product]){
        cart[product] = cart[product] + 1;
    }
    else(
        cart[product] = 1
    )
    const stringified = JSON.stringify(cart)
    localStorage.setItem('cart',stringified)
}

const showPreviowsData = ()=>{
    const cart = checkCart()
    for(const product in cart){
        displayProduct(product)
    }
}
showPreviowsData()