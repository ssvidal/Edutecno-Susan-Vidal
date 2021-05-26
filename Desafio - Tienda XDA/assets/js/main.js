let esVisible = false;

function MostrarOcultarNav(){
    if(esVisible===true){
        esVisible=false;
        document.getElementById("lista").style.display="";
    }else{
        esVisible=true;
        document.getElementById("lista").style.display="block";
    }
}