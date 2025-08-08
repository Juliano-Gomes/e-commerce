export const dinamicPriceBasecOnHour = (price:number):number=>{
    const h = new Date().getHours()
    // this algorithm based on the hour return a new price 
    //if is 08-18h the price will be multiplied by 1.8 higher ,cause is the hours that people more search and by
    //else it will retun the normal price

    if(h>=8 && h<=18){
        return price*1.8
    }else{
        return price

    }
}