//----------------------HORA E DATA-------------------------------
var str_alarme;
function data(){   
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;


document.getElementById('data-txt').innerHTML=str_data
document.getElementById('hora-txt').innerHTML=str_hora


}
setInterval(data,1000);

    //TEMPO DEFINIDO

function tempodefinido() {   
let mindef= document.getElementById('minuts').value;
let segdef= document.getElementById('seconds').value;
if (mindef>0 && mindef<10){
    document.getElementById('min-definidos').innerHTML='0'+mindef;
}else if(mindef>0 && mindef>=10){
    document.getElementById('min-definidos').innerHTML=mindef;
}

if(segdef<10){
    document.getElementById('seg-definidos').innerHTML='0'+segdef;
    }else{
    document.getElementById('seg-definidos').innerHTML=segdef;   
    }
document.getElementById('dados-definidos').style.display="block";
document.getElementById('dados').style.display="none";

 }



//-----------------------CONTADOR----------------------------------

let minutos=0;
let segundos=0;
var tmp;
var tmpt;

function timer(){
    segundos++;
    document.getElementById('botaopausa').style.display="block";
    //document.getElementById('data').style.display="block";
    document.getElementById('voltar').style.display="block";
    document.getElementById('iniciar').style.display="none";
    if(segundos>59){
        minutos++;
        segundos=0;
        if(minutos<99){
            document.getElementById('min').innerHTML='0'+minutos;
        }else{
            document.getElementById('min').innerHTML=minutos;
        }
        
        }
        if(segundos<10){
            document.getElementById('seg').innerHTML='0'+segundos;
        }else{
            document.getElementById('seg').innerHTML=segundos;
        }
        

        document.querySelector

    //Contador LIMIT AND RESET AND MUDAR A COR

    let minutofin= document.getElementById('minuts').value;
    let segundofin= document.getElementById('seconds').value;

        if(minutofin==minutos&&segundofin<segundos){
        minutos=0;
        segundos=0;
        document.getElementById('min').innerHTML='0'+minutos;
        document.getElementById('seg').innerHTML='0'+segundos; 
                
            //MUDAR A COR:
            
            if(document.getElementById('min').style.color=="white"){
                document.getElementById('min').style.color="red";
                document.getElementById('doisponto').style.color="red";
                document.getElementById('seg').style.color="red";
              }

                else if(document.getElementById('min').style.color=="red"){
                    document.getElementById('min').style.color="blue";
                    document.getElementById('doisponto').style.color="blue";
                    document.getElementById('seg').style.color="blue";
                }

                    else if(document.getElementById('min').style.color=="blue"){
                        document.getElementById('min').style.color="darkorange";
                        document.getElementById('doisponto').style.color="darkorange";
                        document.getElementById('seg').style.color="darkorange";
                    }
                    else if(document.getElementById('min').style.color=="darkorange"){
                        document.getElementById('min').style.color="#22fc29";
                        document.getElementById('doisponto').style.color="#22fc29";
                        document.getElementById('seg').style.color="#22fc29";
                    }

                    else{document.getElementById('min').style.color="white"; 
                        document.getElementById('doisponto').style.color="white";
                        document.getElementById('seg').style.color="white";}
            
        

    }
}

    //Contador do Tempo Total de Treino:

let minutostotal=0;
let segundostotal=0;

function tempototal(){
    segundostotal++;
    if(segundostotal>59){
        minutostotal++;
        segundostotal=0;
        if(minutostotal<10){
            document.getElementById('mintot').innerHTML='0'+minutostotal;
        }else{
            document.getElementById('mintot').innerHTML=minutostotal;
        }
        
    }
    if(segundostotal<10){
        document.getElementById('segtot').innerHTML='0'+segundostotal;
    }else{
        document.getElementById('segtot').innerHTML=segundostotal;
    }
    
} 
    //reproducir automaticamente el video para evitar que la pantalla se apague
    
    //DISPARAR AS FUNCOES

function start(){
    tmp=setInterval(timer,1000);
    document.getElementById('myvideo').play();

    
}
function starttotal(){
    tmpt=setInterval(tempototal,1000);
    document.getElementById('continuar').style.display="none";
    document.getElementById('title').style.display="none";
    document.getElementById('totaltreino').style.display="block";
}




    //PARAR OS TIMERS

function parar(){
    clearInterval(tmp);
    clearInterval(tmpt);
    document.getElementById('continuar').style.display="block";
    document.getElementById('iniciar').value="CONTINUAR";
    document.getElementById('botaopausa').style.display="none";
}