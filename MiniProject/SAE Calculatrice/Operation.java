public abstract  class Operation extends Expressions {
  private Expressions operande1;
  private Expressions operande2;

public Operation(){
}

public Operation(Expressions operande1,Expressions operande2){this.operande1=operande1;this.operande2=operande2;
  }



//getteur
  public Expressions getOperande1(){
    return this.operande1;
  }

  public Expressions getOperande2(){
    return this.operande2;
  }

//setteur
  public void setOperande1(Expressions n){
    this.operande1 = n;

  }
  public void setOperande2(Expressions n){
    this.operande2 = n;

  }

}
