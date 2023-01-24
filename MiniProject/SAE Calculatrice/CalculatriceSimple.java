public class CalculatriceSimple {


public static void main(String[] args) {



  Nombre n1 = new Nombre(12);
  Nombre n2 = new Nombre(2);
  Nombre n3 = new Nombre(0);
  Nombre n4 = new Nombre(7);
  Nombre n5 = new Nombre(8);

  Operation mul1 = new Multiplication(n1,n2);
  Operation sou1 = new Soustraction(n1,n2);
  Operation add1 = new Addition(n1,n2);
  Operation mul2 = new Multiplication(n4,n5);

    Operation div1 = new Division(n1,n2);
    Operation div2 = new Division(n2,n3);

try {


    System.out.println(div1+"="+div1.valeur());
    System.out.println(mul1+"="+mul1.valeur());
    System.out.println(sou1+"="+sou1.valeur());
    System.out.println(add1+"="+add1.valeur());
    System.out.println(div2+"="+div2.valeur());}
//Déléguer une ArithmeticException avec la methode valeur
  catch (ArithmeticException e) {
      System.out.println("la division par zero n'est pas possible"+e.toString());}
System.out.println(mul2+"="+mul2.valeur());
  }



}
