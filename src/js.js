function insert() {
    var textarea = document.getElementById("textarea");
    var arrayTesteArea = textarea.value.split ("\n");

    //console.log(arrayTesteArea);
    

    //criando tabela
    var table = "<table border='1'><tr>";
    for (var i = 0; i < arrayTesteArea.length; i++){
            
            var test = arrayTesteArea[i].split ("\t");
                if(i==0){
                    for (var r = 0; r < test.length; r++) {
                            table += "<th>" + test[r] + "</th>";   
                        }
                } else {
                        for (var r = 0; r < test.length; r++) {
                            table += "<td>" + test[r] + "</td>";    
                        }
                }
        table += "</tr>";
    }

    // for (var r = 1; r < arrayTesteArea.length; r++) {
    //         table += "<tr>" + arrayTesteArea[r] + "</tr>" + "\n";
    //     }

    //converter priemira letra em maiúsculo
    // var primeiraLetraEmMaiusculo = primeiraLetraEmMaiusculo.charAt(0).toUpperCase() + primeiraLetraEmMaiusculo.slice(1);
    // for(var p = 0; p < primeiraLetraEmMaiusculo.length; p++){
    //     if (primeiraLetraEmMaiusculo.charAt(i) === " ");{

    //     }
    // }

    document.getElementById("divTeste").innerHTML = table += "</table>";
   
}


function delet(){

var limpaTextArea = document.getElementById("textarea");
limpaTextArea.value = "";
}