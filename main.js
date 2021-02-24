//CALCULAR PORCENTAJE
const CALCULATEPERCENT = () => {
    let nofp = document.querySelector(".form__input--main").value;
    let perc = parseFloat(nofp);
    console.log(perc)
    let pri = document.querySelector(".form__label--input").value;
    let pre = parseFloat(pri);
    console.log(pre)
    let percen = (perc * pre) / 100;
    console.log(percen)
    let pr = pre - perc;
    console.log(pr)
    document.querySelector(".form__span--result").innerHTML = `El IVA ES ${percen}`
    document.querySelector(".form__span--result2").innerHTML = `El PRECIO CON IVA ES ${pr}`
}