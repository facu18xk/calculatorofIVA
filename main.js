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
const myIva = () => {
    let percentage ={
        uruguay: "De 22% y el reducido es 10%",
        argentina:"21% reducido de 10.5% y aumentado de 27%",
        chile: "19%",
        peru: "18%",
        brasil: "17%",
        mexico: "16%",
        honduras: "15%",
        bolivia: "13%",
        ecuador: "12%",
        puertoRico: "11.5%", paraguay: "10%", panama: "7%" , espanha: "21% el reducido 10% y el superreducido 4%"}
    let c = document.querySelector(".text--input").value;
    console.log(c);
    if(c === "") return document.querySelector(".text--ivanoredux").innerHTML= "Por favor introdusca un pais";
    switch (c) {
        case "Uruguay":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.uruguay}`;
            break;
        case "Argentina":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.argentina}`;
            break;
        case "Chile":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.chile}`;
            break;
        case "Perú – Rep. Dominicana":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.peru}`;
            break;
        case "Brasil":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.brasil}`;
            break;
        case "México – Colombia":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.mexico}`;
            break;
        case "Honduras – Nicaragua":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.honduras}`;
            break;
        case "Bolivia – Costa Rica – El Salvador":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.bolivia}`;
            break;
        case "Puerto Rico":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.puertoRico}`;
            break;
        case "Ecuador – Guatemala – Venezuela":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.ecuador}`;
            break;
        case "Paraguay":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.paraguay}`;
            break;
        case "Panama":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.panama}`;
            break;
        case "Espanha":
            document.querySelector(".text--ivanoredux").innerHTML= `El porcentaje de iva en su pais es: ${percentage.espanha}`;
            break;
        default:
            document.querySelector(".text--ivanoredux").innerHTML= "Por favor introdusca un pais valido";
            break;
    }
}






















