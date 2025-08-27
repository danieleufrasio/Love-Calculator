function calculateLove() {

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if(name1==="" || name2 === ""){
        alert("Por favor, preencha todos os campos");
    }else{

        const lovePorcetage= Math.floor(Math.random() * 101);

        const result = document.getElementById('result');

        result.innerHTML = `${name1} e ${name2} tem ${lovePorcetage}% de compatibilidade`;

        if(lovePorcetage < 30){
          result.innerHTML += "<br> Não se preocupe, mas continue tentando se apaixonar!";
    }else if(lovePorcetage > 30 && lovePorcetage < 70){
           result.innerHTML += "<br> Existe uma grande porcentagem de se apaixonarem!";
    }else{
          result.innerHTML += "<br> Parabens! Se apaixonaram!";
   
   
        }

    
    }
   
}