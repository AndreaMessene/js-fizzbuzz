function es1(){

    let lista = document.querySelector('ul');


    console.log (lista);

    for(let riga = 1 ; riga <= 98 ; riga++){

    if (riga % 3 == 0 && riga % 5 == 0){
        lista.innerHTML += `<li class="fizzbuzz">fizzbuzz</li>`;


    } else if ( riga % 3 == 0){
        lista.innerHTML += `<li class="fizz">fizz</li>`;

    } else if ( riga % 5 == 0){
        lista.innerHTML += `<li class="buzz">buzz</li>`;
        
    } else{
        lista.innerHTML += `<li class="lista">${riga}</li>`;
    }

}
}