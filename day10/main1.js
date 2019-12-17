
//設:商品價格20.30.40.50
let myproductPrices = [20, 30, 40, 50];
//加總商品價格
let sum = (productPrices) => {
    let amount = 0
    productPrices.forEach((productPrice) => {
        amount = amount + productPrice
    })
    return amount
}
//滿足條件.折扣
let myCoupon = {
    amountshouldLargerOrEquelThan: 100, //大於100 
    productCountLargerOrEquelThan: 3,
    discount: 50 //折扣50
}
let isCouponAvailable = (coupon, myproductPrices) => {
    let productAmount = sum(myproductPrices);
    if (productAmount < coupon.amountshouldLargerOrEquelThan) {
        return [false, `amount should larger or equel than ${coupon.amountshouldLargerOrEquelThan}`]
        // {result: false,
        //     errorMessage: `amount should larger or equel than ${coupon.amountshouldLargerOrEquelThan}`
        // }
    }
    if (myproductPrices.length < coupon.productCountLargerOrEquelThan) {
        return [false, `product count larger or equel than ${coupon.productCountLargerOrEquelThan}`]

        // {result: false,
        //     errorMessage: `product count larger or equel than ${coupon.productCountLargerOrEquelThan}`
        // }
    }
    return [true]   //{ result: true, errorMessage: null }
}

let [result, Message = "success!"] = isCouponAvailable(myCoupon, myproductPrices)
if (result) {
    console.log(Message)
} else {
    console.log(Message)
}










