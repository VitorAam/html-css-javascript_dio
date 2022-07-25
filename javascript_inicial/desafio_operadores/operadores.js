function numeros(n1, n2){
    let iguais = n1==n2? 'são iguais':'não são iguais';
    let maiorDez = n1+n2 > 10? 'maior':'menor';
    let maiorVinte = n1+n2 > 20? 'maior':'menor';
    return `Os números ${n1} e ${n2} ${iguais}. Sua soma é ${n1+n2}, que é ${maiorDez} que 10 e ${maiorVinte} que 20.`
}