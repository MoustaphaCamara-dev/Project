public class Division extends Operation {

    public Division(Expressions n1, Expressions n2){
        super(n1,n2);
  }


//resultat de la division
 public double valeur(){return super.getOperande1().valeur()/super.getOperande2().valeur();
 }



//calcule effectuer sans le resultat
public String toString(){
  if (super.getOperande1() instanceof Operation == true &&super.getOperande2() instanceof Operation == true) {
    return "("+super.getOperande1().toString()+"/"+super.getOperande2().toString()+")";

  }

else if (super.getOperande1() instanceof Operation == true) {
  return "("+super.getOperande1().toString()+"/"+super.getOperande2().valeur()+")";

  }
else  if (super.getOperande2() instanceof Operation == true) {
  return "("+super.getOperande1().valeur()+"/"+super.getOperande2().toString()+")";

  }
else {
  return "("+super.getOperande1().valeur()+"/"+super.getOperande2().valeur()+")";
}

}
}
