var senha = document.getElementsByClassName("senha")[0];
var slider = document.getElementById("myRange");
var output = document.getElementsByClassName("demo")[0];
output.innerHTML = slider.value;


function gensenha() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tamanhosenha = slider.value - 1;
    var senha = "";
    var icone = document.getElementsByClassName("fa-sync")[0];

    for (var i = 0; i <= tamanhosenha; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        senha += chars.substring(randomNumber, randomNumber +1);
    }

    icone.classList.add("fa-spin")

    setTimeout(() => {
      icone.classList.remove("fa-spin")
    }, 600);

    document.getElementsByClassName("senha")[0].value = senha;

}
function copysenha() {
var copyText = document.getElementsByClassName("senha")[0];
copyText.select();
copyText.setSelectionRange(0, 999);
document.execCommand("copy");

}

slider.oninput = function() {
  output.placeholder = this.value;
  gensenha();
}


gensenha();