
function validate(){
    const value = document.getElementById("input-prenom").value

    if(!value){
        return;
    }
    let text = "Essaye encore...";
    let classe = "text-warning";
    // Hey ! Tu triches ! Bien joué petit pirate ;)
    if(value.toLowerCase() == 'maxime'){
        text = "BRAVO !!!";
        classe = "text-success";
    }

    document.getElementById("result").innerHTML =`<h3 class="text-center ${classe}">${text}</h3>`
}