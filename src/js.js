function insert() {
    var textarea = document.getElementById("textarea");
    var arrayTesteArea = textarea.value.split ("\n");
    
    //criando tabela
    var table = "<table border='1'><tr>";
    for (var i = 0; i < arrayTesteArea.length; i++) {
        var test = arrayTesteArea[i].split ("\t");
        if(i == 0) {
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
    document.getElementById("divTeste").innerHTML = table += "</table>"; 
}

function delete() {
    var limpaTextArea = document.getElementById("textarea");
    limpaTextArea.value = "";
}
