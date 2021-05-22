const monto= document.querySelector("#monto");
const moneda = document.getElementById("moneda");
const montoTotal = document.getElementById("montoTotal");

moneda.addEventListener("change",()=>{
    
    switch (moneda.value){
        case "euro":
            montoTotal.textContent = 0.0087* monto.value;
            break;
        case "usd":
            montoTotal.textContent =0.011* monto.value;
            break;
        case "mxn":
            montoTotal.textContent= 4.73 * monto.value;
            break;
            case "col":
                montoTotal.textContent= 39.78* monto.value;

    }
});
