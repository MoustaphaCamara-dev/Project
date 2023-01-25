//recuperer les element

let cases = [... document.getElementsByClassName("case")];
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNuls = document.getElementById("scoreNuls");

let state = {


    joueurEnCours:1,
    scoreJ1:0,
    scoreJ2:0,
    matchNuls:0,
    c1 : 0,
    c2 : 0,
    c3 : 0,
    c4 : 0,
    c5 : 0,
    c6: 0,
    c7 : 0,
    c8 : 0,
    c9 : 0,

};


const resetState = ( )=>{

 state.c1 = 0;
 state.c2 = 0;
 state.c3 = 0;
 state.c4 = 0;
 state.c5 = 0;
 state.c6 = 0;
 state.c7 = 0;
 state.c8 = 0;
 state.c9 = 0;
 cases.forEach((c) => (c.textContent = ""));
 joueur.textContent= "1";

}


const verifierVictoire = () => {
if (

    (state.c1 ==state.c2 && state.c2  ==state.c3 &&state.c1  > 0) ||
    (state.c1 ==state.c4 && state.c4  ==state.c7 &&state.c1  > 0) ||
    (state.c1 ==state.c5 && state.c5  ==state.c9 &&state.c1  > 0) ||
    (state.c2 ==state.c5 && state.c5  ==state.c8 &&state.c2  > 0) ||
    (state.c3 ==state.c6 && state.c6  ==state.c9 &&state.c3  > 0) ||
    (state.c4 ==state.c5 && state.c5  ==state.c6 &&state.c4  > 0) ||
    (state.c7==state.c5 && state.c5  ==state.c3 &&state.c7  > 0) ||
    (state.c7 ==state.c8 && state.c8  ==state.c9 &&state.c7  > 0) 
    
    
    
    ) { return true;}

else if (state.c1 != 0 &&
     state.c2!=0&&
     state.c3 != 0 && 
     state.c4!=0&&
     state.c5 != 0 && 
     state.c6!=0&&
    state.c7 != 0 &&
    state.c8!=0&&
    state.c9!=0
     )

{ return null}

else{return false}


}

const jouerCase = (e) => {

    let idCase = e.target.id;


    if (state[idCase] != 0 ){return;}
   

        state[idCase] = state.joueurEnCours;
        let Victoire = verifierVictoire();


        if (Victoire === true)
        {
            alert("le gagnant et le joueur"+ state.joueurEnCours)
            if(state.joueurEnCours==1)
        
                {state.scoreJ1++;
               ;
                score1.textContent= state.scoreJ1;
                }
            if(state.joueurEnCours==2)
                {state.scoreJ2++;
                score2.textContent= state.scoreJ2;
                }
        resetState();


        
    }
    else if(Victoire=== null){
        state.matchNuls++;
        scoreNuls.textContent = state.matchNuls;
        alert("Match Nul");
        resetState();

    }

    else if( Victoire === false){
        if(state.joueurEnCours==1)
        {state.joueurEnCours=2;
        e.target.textContent= "X";
        joueur.textContent= "2";
        }

        else if(state.joueurEnCours==2)
        {state.joueurEnCours=1;
        e.target.textContent= "O";
        joueur.textContent= "1";
        }
        
    }
  
    }

cases.forEach((el) => {
    el.addEventListener("click" , jouerCase);
    


})
