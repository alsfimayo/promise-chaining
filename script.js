
// // const stocks={
// //     Fruits:['apple','strabary','banana','mango'],
// //     Liquid:['water','ice'],
// //     Holder:['cone','cup','stick'],
// //     toppings:['chocolate','peanats'],
    
// // }

// // function order (number,production){
// // setTimeout(()=>{
// //     production();
// //     console.log(`${stocks.toppings[number]} was selected`)
// //     setTimeout(() => {
// //         console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`);
// //         setTimeout(() => {
// //             console.log(`${stocks.Holder[1]} was salected`)
// //         }, 1000);
// //     }, 2000);
// // },3000)
// // }
// // function callproduction(){
// // console.log('call a production')
// // }
// // let res=order(1,callproduction);
// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   console.log(fetchPromise);
  
//   fetchPromise.then((response) => {
//     console.log(`Received response: ${response.status}`);
//   });
  
//   console.log("Started request…");
const stocks={
        Fruits:['apple','strabary','banana','mango'],
        Liquid:['water','ice'],
        Holder:['cone','cup','stick'],
        toppings:['chocolate','peanats'],
};
let isShopOpen=false;
let order=(time,work)=>{
    return new Promise((resolve, reject) => {
        if(!isShopOpen){
            setTimeout(()=>{
                if(typeof work==='function'){
                    resolve(work());

                }
            },time)
        }
        else{
            reject(console.log("our shop is closed"));
        }
    })
}
order(2000,()=>console.log(`${stocks.Fruits[0]} was slected`))
.then(()=>{
    return order(0,(()=>{
console.log('production has started')
    }))

})
.then(()=>{
    return order(2000,(()=>{
        console.log('cut the fruits')
    }))
})
.then(()=>{
    return order(1000,(()=>{
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)
    }))
})
.then(()=>{
    return order(1000,(()=>{
        console.log('start the mechinasim')
    }))
})
.then(()=>{
    return order(2000,(()=>{
        console.log(`${stocks.Holder[0]}`)
    }))
})
.then(()=>{
    return order(3000,(()=>{
        console.log(`${stocks.toppings}`)
    }))
})
.catch(()=>{
    console.log('customer left')
})
.finally(()=>{
    console.log('shop is closed')
})