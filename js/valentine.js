console.log('helllo');

// kitkat
document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
     const kitkatcost = getinputvalue('kitkat-quantity', 200);
     setinnnertext('chocolate',kitkatcost);
     totalcost();

})
document.getElementById('rose-buy-btn').addEventListener('click',function(){
     const rosecost = getinputvalue('rose-quantity', 100);
     setinnnertext('rose',rosecost);
     totalcost();

})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
     const diarycost = getinputvalue('diary-quantity', 100);
     setinnnertext('diary',diarycost);
     totalcost();
})

// promocode
function handlePromoCode(){
    const promo = document.getElementById('promo-code').value;
    if( promo == '101'){

        const totalall = stringtoconvertid('total');
        setinnnertext('all-total', totalall - totalall * 0.1 );
        
    }else{

        alert ('promo code did not match');
    }
}



// all function
function totalcost(n){
    const choclate = stringtoconvertid('chocolate');
    const rose = stringtoconvertid('rose');
    const diary = stringtoconvertid('diary');
     const totalc = choclate + rose + diary;
    //  total ber kore set korlam
     setinnnertext('total', totalc);
}

function stringtoconvertid(id){
 const elements = document.getElementById(id).innerText;
 return parseFloat(elements);
}

function getinputvalue(id, price){
    const quantity = document.getElementById(id).value;
    const totalprice = parseInt(quantity) * parseInt(price);
    //document.getElementById(id).value = '';
    return totalprice;

}
function setinnnertext(id,value){
    document.getElementById(id).innerText = value;
}













/* // get value input
const kitkatinput = document.getElementById('kitkat-quantity');
const kitkatvalue = kitkatinput.value; 
  kitkatinput.value ='';
// price value ;
 const pricekitkattext = document.getElementById('kitkat-price');
 const pricekitkat = pricekitkattext.innerText;

 const totalprice = kitkatvalue * pricekitkat;
 

//console.log(totalprice);
// now value choclate
const choclate = document.getElementById('chocolate');
 const chocletprice = choclate.innerText;
// set value
choclate.innerText = totalprice;
// total price all

const totalcost = document.getElementById('total');
const total = totalcost.innerText;

// setS
 */