//CALCULAR PORCENTAJE
const CALCULATEPERCENT = () => {
    let nofp = document.querySelector(".form__input--main").value;
    if(nofp === "") return document.querySelector(".form__span--result").innerHTML = `Ingrese el porcentaje por favor`;
    let perc = parseFloat(nofp)
    let pri = document.querySelector(".form__label--input").value;
    if(pri === "") return document.querySelector(".form__span--result").innerHTML = `Ingrese el precio por favor`;
    let pre = parseFloat(pri);
    if(typeof pre !== 'number') return document.querySelector(".form__span--result").innerHTML = `Ingrese el precio por favor`;
    let percen = (perc * pre) / 100;
    let pr = pre + perc;
    document.querySelector(".form__span--result").innerHTML = `El IVA ES ${percen}`
    document.querySelector(".form__span--result2").innerHTML = `El PRECIO CON IVA ES ${pr}`
}
