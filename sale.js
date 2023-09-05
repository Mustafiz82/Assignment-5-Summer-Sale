let totalPriceString = document.getElementById("total-price")
let totalPrice = parseFloat(totalPriceString.innerText)
let applyBtn = document.getElementById("apply")
let element = document.getElementById("pricelist")
let inputText = apply.previousElementSibling
let purcase = document.getElementById("purcase")

apply.setAttribute("disabled" , true)
purcase.setAttribute("disabled" , true)


function price(idName){
   let  stringPrice =document.getElementById(idName).innerText
   numberPrice = parseFloat(stringPrice)
    return numberPrice
}

function setTitle(idName){
    let cardTitle = document.getElementById(idName).innerText
    let h2 = document.createElement("h2")
    h2.innerText = element.childElementCount+ 1 +". " + cardTitle
    document.getElementById("total").innerText =  totalPrice 
    element.appendChild(h2)

}

function enebleApplyBtn(){
    if (totalPrice >= 200){
        applyBtn.removeAttribute("disabled")
    }
    else {
        applyBtn.setAttribute("disabled" , true)
    }
}

function eneblePurchessBtn(){
    if(totalPrice > 0){
        purcase.removeAttribute("disabled")
    }
    else{
        purcase.setAttribute("disabled" , true)

    }
}

function discount(){
    const totalPrice = document.getElementById("total-price").innerText
    const setDiscountPrice = ((totalPrice * 20)/100)
    
    if (inputText.value == "SELL200"){
        document.getElementById("discount-price").innerText = setDiscountPrice
        document.getElementById("total").innerText =  totalPrice - setDiscountPrice
        inputText.value = ""

    }
    else{
        alert("wrong coupon")
    }
}

function cart(titleId , priceId ){
    totalPrice = totalPrice +  price(priceId) 
    totalPriceString.innerText = totalPrice
    setTitle(titleId)
    enebleApplyBtn()
    eneblePurchessBtn()
}

function resetAll(){
    purcase.setAttribute("disabled" , true)
    apply.setAttribute("disabled" , true)
    document.getElementById("discount-price").innerText = "00.00"
    document.getElementById("total").innerText = "00.00"
    document.getElementById("total-price").innerText = "00.00"
    inputText.value = ""
    element.innerHTML = ``
}