// let usuario = document.getElementById("nombreUsuario").value;
// let paisUsuario = document.getElementById("seleccionarPais").value;

// function guardar_localstorage_usuario_pais(var1, var2){
//     localStorage.setItem("usuario", var1)
//     localStorage.setItem("paisUsuario", var2)
// }

// btnIngreso.addEventListener("click", ()=>{
    
// })

const paices= []

let puntosEquipo1 = 0;
let puntosEquipo2 = 0;
let puntosEquipo3 = 0;
let puntosEquipo4 = 0;

let golesAFavorArg = 0;
let golesAFavorAra = 0;
let golesAFavorPol = 0;
let golesAFavorMex = 0;

let golesEnContraArg = 0;
let golesEnContraAra = 0;
let golesEnContraPol = 0;
let golesEnContraMex = 0;

let pjArg = 0;
let pjAra = 0;
let pjPol = 0;
let pjMex = 0;

let pgArg = 0;
let pgAra = 0;
let pgPol = 0;
let pgMex = 0;

let peArg = 0;
let peAra = 0;
let pePol = 0;
let peMex = 0;

let ppArg = 0;
let ppAra = 0;
let ppPol = 0;
let ppMex = 0;

function Pais(equipo, pts, pJ, pG, pE, pP, gF, gC, dif){
    this.equipo= equipo;
    this.pts= pts;
    this.pJ= pJ;
    this.pG= pG;
    this.pE= pE;
    this.pP= pP;
    this.gF= gF;
    this.gC= gC;
    this.dif= dif;
}

function cargarPais (arr, pais){
    arr.push(pais)
}

cargarPais (paices, new Pais("argentina", 0,0,0,0,0,0,0,0))
cargarPais (paices, new Pais("arabia saudita", 0,0,0,0,0,0,0,0))
cargarPais (paices, new Pais("polonia", 0,0,0,0,0,0,0,0))
cargarPais (paices, new Pais("mexico", 0,0,0,0,0,0,0,0))

let btnSimular= document.querySelector("#simular")
let btnSimularMundial = document.querySelector("#simularMundial")

btnSimular.addEventListener("click", ()=>{
        
    paices[0].pts = 0;
    paices[1].pts = 0;
    paices[2].pts = 0;
    paices[3].pts = 0;

    paices[0].pJ = 0;
    paices[1].pJ = 0;
    paices[2].pJ = 0;
    paices[3].pJ = 0;

    paices[0].pG = 0;
    paices[1].pG = 0;
    paices[2].pG = 0;
    paices[3].pG = 0;

    paices[0].pE = 0;
    paices[1].pE = 0;
    paices[2].pE = 0;
    paices[3].pE = 0;
    
    paices[0].pP = 0;
    paices[1].pP = 0;
    paices[2].pP = 0;
    paices[3].pP = 0;

    paices[0].gF = 0;
    paices[1].gF = 0;
    paices[2].gF = 0;
    paices[3].gF = 0;
    
    paices[0].gC = 0;
    paices[1].gC = 0;
    paices[2].gC = 0;
    paices[3].gC = 0;
    
    let resultArgentina= document.getElementsByClassName("golesLocal")[0].value;
    let resultArabia= document.getElementsByClassName("golesVisitante")[0].value;

    puntosArgentina(resultArgentina, resultArabia);
    puntosArabia(resultArabia, resultArgentina);

    paices[0].pJ= paices[0].pJ +1
    paices[1].pJ= paices[1].pJ +1

    let resultMexico= document.getElementsByClassName("golesLocal")[1].value;
    let resultPolonia= document.getElementsByClassName("golesVisitante")[1].value;

    puntosMexico(resultMexico, resultPolonia)
    puntosPolonia(resultPolonia, resultMexico)

    paices[2].pJ= paices[2].pJ +1
    paices[3].pJ= paices[3].pJ +1

    let resultArgentina2= document.getElementsByClassName("golesLocal")[2].value;
    let resultMexico2= document.getElementsByClassName("golesVisitante")[2].value;

    puntosArgentina(resultArgentina2, resultMexico2)
    puntosMexico(resultMexico2, resultArgentina2)

    paices[0].pJ= paices[0].pJ + 1
    paices[2].pJ= paices[2].pJ + 1

    let resultPolonia2= document.getElementsByClassName("golesLocal")[3].value;
    let resultArabia2= document.getElementsByClassName("golesVisitante")[3].value;

    puntosArabia(resultArabia2, resultPolonia2)
    puntosPolonia(resultPolonia2, resultArabia2)

    paices[1].pJ= paices[1].pJ +1
    paices[3].pJ= paices[3].pJ +1

    let resultPolonia3= document.getElementsByClassName("golesLocal")[4].value;
    let resultArgentina3= document.getElementsByClassName("golesVisitante")[4].value;

    puntosPolonia(resultPolonia3, resultArgentina3)
    puntosArgentina(resultArgentina3, resultPolonia3)

    paices[3].pJ= paices[3].pJ +1
    paices[0].pJ= paices[0].pJ +1

    let resultArabia3= document.getElementsByClassName("golesLocal")[5].value;
    let resultMexico3= document.getElementsByClassName("golesVisitante")[5].value;

    puntosArabia(resultArabia3, resultMexico3);
    puntosMexico(resultMexico3, resultArabia3);

    paices[1].pJ= paices[1].pJ +1
    paices[2].pJ= paices[2].pJ +1

    pjArg = paices[0].pJ
    pjAra = paices[1].pJ
    pjPol = paices[2].pJ
    pjMex = paices[3].pJ

    pgArg = paices[0].pG
    pgAra = paices[1].pG
    pgPol = paices[2].pG
    pgMex = paices[3].pG

    peArg = paices[0].pE
    peAra = paices[1].pE
    pePol = paices[2].pE
    peMex = paices[3].pE

    ppArg = paices[0].pP
    ppAra = paices[1].pP
    ppPol = paices[2].pP
    ppMex = paices[3].pP

    //Colocar puntos en la tabla
    let tdPtsArg = document.querySelectorAll(".pts")[0];
    tdPtsArg.innerHTML=paices[0].pts;
    let tdPtsAra = document.querySelectorAll(".pts")[1];
    tdPtsAra.innerHTML= paices[1].pts;
    let tdPtsPol = document.querySelectorAll(".pts")[2];
    tdPtsPol.innerHTML= paices[2].pts;
    let tdPtsMex = document.querySelectorAll(".pts")[3];
    tdPtsMex.innerHTML= paices[3].pts;

    //Colocar partidos jugados en la tabla
    let tdPjArg = document.querySelectorAll(".pj")[0];
    tdPjArg.innerHTML= pjArg;
    let tdPjAra = document.querySelectorAll(".pj")[1];
    tdPjAra.innerHTML= pjAra;
    let tdPjPol = document.querySelectorAll(".pj")[2];
    tdPjPol.innerHTML= pjPol;
    let tdPjMex = document.querySelectorAll(".pj")[3];
    tdPjMex.innerHTML= pjMex;

    //Colocar partidos ganados en la tabla
    let tdPgArg = document.querySelectorAll(".pg")[0];
    tdPgArg.innerHTML= pgArg;
    let tdPgAra = document.querySelectorAll(".pg")[1];
    tdPgAra.innerHTML= pgAra;
    let tdPgPol = document.querySelectorAll(".pg")[2];
    tdPgPol.innerHTML= pgPol;
    let tdPgMex = document.querySelectorAll(".pg")[3];
    tdPgMex.innerHTML= pgMex;

    //Colocar partidos empatados en la tabla
    let tdPeArg = document.querySelectorAll(".pe")[0];
    tdPeArg.innerHTML= peArg;
    let tdPeAra = document.querySelectorAll(".pe")[1];
    tdPeAra.innerHTML= peAra;
    let tdPePol = document.querySelectorAll(".pe")[2];
    tdPePol.innerHTML= pePol;
    let tdPeMex = document.querySelectorAll(".pe")[3];
    tdPeMex.innerHTML= peMex;

    //Colocar partidos perdidos en la tabla
    let tdPpArg = document.querySelectorAll(".pp")[0];
    tdPpArg.innerHTML= ppArg;
    let tdPpAra = document.querySelectorAll(".pp")[1];
    tdPpAra.innerHTML= ppAra;
    let tdPpPol = document.querySelectorAll(".pp")[2];
    tdPpPol.innerHTML= ppPol;
    let tdPpMex = document.querySelectorAll(".pp")[3];
    tdPpMex.innerHTML= ppMex;

    //Colocar goles a favor
    let tdGfArg = document.querySelectorAll(".gf")[0];
    tdGfArg.innerHTML = paices[0].gF;
    let tdGfAra = document.querySelectorAll(".gf")[1];
    tdGfAra.innerHTML = paices[1].gF;
    let tdGfPol = document.querySelectorAll(".gf")[2];
    tdGfPol.innerHTML = paices[2].gF;;
    let tdGfMex = document.querySelectorAll(".gf")[3];
    tdGfMex.innerHTML = paices[3].gF;

    //Colocar goles en contra
    let tdGcArg = document.querySelectorAll(".gc")[0];
    tdGcArg.innerHTML = paices[0].gC;
    let tdGcAra = document.querySelectorAll(".gc")[1];
    tdGcAra.innerHTML = paices[1].gC;
    let tdGcPol = document.querySelectorAll(".gc")[2];
    tdGcPol.innerHTML = paices[2].gC;
    let tdGcMex = document.querySelectorAll(".gc")[3];
    tdGcMex.innerHTML = paices[3].gC;

    //Colocar diferencia de goles
    let tdDifArg = document.querySelectorAll(".dif")[0];
    tdDifArg.innerHTML = paices[0].dif;
    let tdDifAra = document.querySelectorAll(".dif")[1];
    tdDifAra.innerHTML = paices[1].dif;
    let tdDifPol = document.querySelectorAll(".dif")[2];
    tdDifPol.innerHTML = paices[2].dif;
    let tdDifMex = document.querySelectorAll(".dif")[3];
    tdDifMex.innerHTML = paices[3].dif;

    //Ordenar array
    // paices.sort((a, b)=>{
    //     if(a.pts < b.pts){
    //         return 1;
    //     }
    //     if(a.pts > b.pts){
    //         return -1;
    //     }
    //     return 0;
    // })
    // console.log(paices)

    

    //Ordenar tabla
    //  let tabla = document.getElementById("tablaPosiciones")
    //      //rows
    //      for(var i = 1; i < tabla.rows.length; i++){
    //          //cells
    //          for(var j = 0; j < tabla.rows[i].cells[j].length; j++){
    //              tabla.rows[i].cells[j].innerText = paices[i-1][j];
    //              console.log(paices[i-1][j])
    //          }
    //      }
})


// btnSimularMundial.addEventListener("click", ()=>{
        
//     paices[0].pts = 0;
//     paices[1].pts = 0;
//     paices[2].pts = 0;
//     paices[3].pts = 0;

//     paices[0].pJ = 0;
//     paices[1].pJ = 0;
//     paices[2].pJ = 0;
//     paices[3].pJ = 0;

//     paices[0].pG = 0;
//     paices[1].pG = 0;
//     paices[2].pG = 0;
//     paices[3].pG = 0;

//     paices[0].pE = 0;
//     paices[1].pE = 0;
//     paices[2].pE = 0;
//     paices[3].pE = 0;
    
//     paices[0].pP = 0;
//     paices[1].pP = 0;
//     paices[2].pP = 0;
//     paices[3].pP = 0;

//     paices[0].gF = 0;
//     paices[1].gF = 0;
//     paices[2].gF = 0;
//     paices[3].gF = 0;
    
//     paices[0].gC = 0;
//     paices[1].gC = 0;
//     paices[2].gC = 0;
//     paices[3].gC = 0;
// })


function puntosArgentina(var1,var2){
    paices[0].gF = parseInt(paices[0].gF) + parseInt(var1);
    paices[0].gC = parseInt(paices[0].gC) + parseInt(var2);
    paices[0].dif = parseInt(paices[0].gF) - parseInt(paices[0].gC)

    if (var1 > var2){
        paices[0].pts = paices[0].pts + 3;
        paices[0].pG = paices[0].pG +1;
    }
    else if (var1 == var2){
        paices[0].pts = paices[0].pts + 1; 
        paices[0].pE = paices[0].pE +1}
    else {
        paices[0].pts = paices[0].pts + 0;
        paices[0].pP = paices[0].pP +1}
    return
}

function puntosArabia(var1,var2){
    paices[1].gF = parseInt(paices[1].gF) + parseInt(var1);
    paices[1].gC = parseInt(paices[1].gC) + parseInt(var2);
    paices[1].dif = parseInt(paices[1].gF) - parseInt(paices[1].gC)


    if (var1 > var2){
        paices[1].pts = paices[1].pts + 3;
        paices[1].pG = paices[1].pG +1}
    else if (var1 == var2){
        paices[1].pts = paices[1].pts + 1; 
        paices[1].pE = paices[1].pE +1}
    else {
        paices[1].pts = paices[1].pts + 0;
        paices[1].pP = paices[1].pP +1}
    return
}

function puntosPolonia(var1,var2){
    paices[2].gF = parseInt(paices[2].gF) + parseInt(var1);
    paices[2].gC = parseInt(paices[2].gC) + parseInt(var2);
    paices[2].dif = parseInt(paices[2].gF) - parseInt(paices[2].gC)

    if (var1 > var2){
        paices[2].pts = paices[2].pts + 3;
        paices[2].pG = paices[2].pG +1}
    else if (var1 == var2){
        paices[2].pts = paices[2].pts + 1; 
        paices[2].pE = paices[2].pE +1}
    else {
        paices[2].pts = paices[2].pts + 0;
        paices[2].pP = paices[2].pP +1}
    return
}

function puntosMexico(var1,var2){
    paices[3].gF = parseInt(paices[3].gF) + parseInt(var1);
    paices[3].gC = parseInt(paices[3].gC) + parseInt(var2);
    paices[3].dif = parseInt(paices[3].gF) - parseInt(paices[3].gC)
   
    if (var1 > var2){
        paices[3].pts = paices[3].pts + 3;
        paices[3].pG = paices[3].pG +1}
    else if (var1 == var2){
        paices[3].pts = paices[3].pts + 1; 
        paices[3].pE = paices[3].pE +1}
    else {
        paices[3].pts = paices[3].pts + 0;
        paices[3].pP = paices[3].pP +1}
    return
}









// function ordenarTabla(){
//     if (puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo3 && puntosEquipo1 >= puntosEquipo4){
//         if(puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo4){
//             if(puntosEquipo3 >= puntosEquipo4){
//                 //1 2 3 4
                
//             }else{
//                 //1 2 4 3
              
//             }
//         }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo4){
//             if(puntosEquipo2 >= puntosEquipo4){
//                 //1 3 2 4
                
//             }else{
//                 //1 3 4 2
            
//             }
//         }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3){
//             if(puntosEquipo2 >= puntosEquipo3){
//                 //1 4 2 3
                
//             }else{
//                 //1 4 3 2
               
//             }
//         }

//     }else if(puntosEquipo2 >= puntosEquipo1 && puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo4){
//         if(puntosEquipo1 >= puntosEquipo3 && puntosEquipo1 >= puntosEquipo4){
//             if(puntosEquipo3 >= puntosEquipo4){
//                 //2 1 3 4
                
//             }else{
//                 //2 1 4 3
                
//             }
//         }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo4){
//             if(puntosEquipo2 >= puntosEquipo4){
//                 //2 3 1 4
                
//             }else{
//                 //2 3 4 1
                
//             }
//         }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3){
//             if(puntosEquipo2 >= puntosEquipo3){
//                 //2 4 1 3 
                
//             }else{
//                 //2 4 3 1
            
//             }
//         }
//     }else if (puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo1 && puntosEquipo3 >= puntosEquipo4){
//         if(puntosEquipo2 >= puntosEquipo1 && puntosEquipo2 >= puntosEquipo4){
//             if(puntosEquipo1 >= puntosEquipo4){
//                 //3 2 1 4
               
//             }else{
//                 //3 2 4 1
            
//             }
//         }else if(puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo4){
//             if(puntosEquipo2 >= puntosEquipo4){
//                 //3 1 2 4
            
//             }else{
//                 //3 1 4 2
            
//             }
//         }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo1){
//             if(puntosEquipo2 >= puntosEquipo1){
//                 //3 4 2 1
            
//             }else{
//                 //3 4 1 2
            
//             }
//         }
//     }else if (puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3 && puntosEquipo4 >= puntosEquipo1){
//         if(puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo1){
//             if(puntosEquipo3 >= puntosEquipo1){
//                 //4 2 3 1
            
//             }else{
//                 //4 2 1 3
            
//             }
//         }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo1){
//             if(puntosEquipo2 >= puntosEquipo1){
//                 //4 3 2 1
            
//             }else{
//                 //4 3 1 2
            
//             }
//         }else if(puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo3){
//             if(puntosEquipo2 >= puntosEquipo3){
//                 //4 1 2 3
           
//             }else{
//                 //4 1 3 2
            
//             }
//         }
// }}