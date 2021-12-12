function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}
var contador;
function calificar(item){
    console.log(item)
    contador= item.id[0];
    let nombre = item.id.substring(1);
    valoracion=0;
    for(let i=0;i<5;i++){
        if(i<contador){
            document.getElementById((i+1)+nombre).style.color="orange";
           valoracion++;
        }
        else{
            document.getElementById((i+1)+nombre).style.color="white";
        }

    }
    sessionStorage.setItem('valoracionseminario',valoracion);
}

function contar() {
    var checkboxes = document.getElementById("form1").checkbox; //Array que contiene los checkbox
    var array=[];
    var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
    var modulos='';
    for (var x=0; x < checkboxes.length; x++) {
     if (checkboxes[x].checked) {


      cont = cont + 1;
      var y=parseInt(checkboxes[x].value);
    sessionStorage.setItem('mo',y);
    var hola= sessionStorage.getItem('mo');
    array.push(hola);

     }



    }


    console.log(array.join())
    sessionStorage.setItem('mo',array.join());
   }

   function conta() {

    var checkboxes = document.getElementById("form2").checkbox; //Array que contiene los checkbox


    var array=[];
    var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
    var modulos='';
    for (var x=0; x < checkboxes.length; x++) {
     if (checkboxes[x].checked) {


      cont = cont + 1;
      var y=parseInt(checkboxes[x].value);
    sessionStorage.setItem('ban',y);
    var hola= sessionStorage.getItem('ban');
    array.push(hola);

     }



    }


    console.log(array.join())
    sessionStorage.setItem('ban',array.join());

   }

   function obtener(){
       contar();
       conta();

   }

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
