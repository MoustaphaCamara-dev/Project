public class Nombre  extends Expressions  {

private double valeurNombre;

//constructeur
public Nombre(){
  this.valeurNombre=0;}

public Nombre(double valeur){
  this.valeurNombre=valeur;

}


//equivalent getteur
public double valeur(){
  return this.valeurNombre;

}

// setteur
public void setValeurNombre(double valeur){
  this.valeurNombre=valeur;
}

public String toString(){ return "valeur="+this.valeurNombre;
  }
}
