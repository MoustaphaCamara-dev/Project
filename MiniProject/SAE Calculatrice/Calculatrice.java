public class Calculatrice {


public static void main(String[] args) {



  Expressions n1 = new Nombre(12);
  Expressions n2 = new Nombre(2);
  Expressions n3 = new Nombre(0);
  Expressions n4 = new Nombre(7);
  Expressions n5 = new Nombre(8);


  Expressions add1 = new Addition(n1,n2);
  Expressions add2 = new Addition(n1,add1);
  Expressions add3 = new Addition(add1,add1);
  Expressions add4 = new Addition(add1,n1);


  Expressions mul1 = new Multiplication(n1,n2);
  Expressions sou1 = new Soustraction(n1,n2);
  Expressions mul2 = new Multiplication(sou1,add2);
  Expressions mul3 = new Multiplication(mul2,sou1);

    Expressions div1 = new Division(mul2,n2);



        System.out.println(add2+"="+add2.valeur());
        System.out.println(add1+"="+add1.valeur());
        System.out.println(add3+"="+add3.valeur());
        System.out.println(add4+"="+add4.valeur());


        System.out.println(mul1+"="+mul1.valeur());
        System.out.println(sou1+"="+sou1.valeur());
        System.out.println(mul2+"="+mul2.valeur());
        System.out.println(mul3+"="+mul3.valeur());
          System.out.println(div1+"="+div1.valeur());


}}
