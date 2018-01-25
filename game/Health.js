function Health(type){
  this.type=type;
  this.size=20;
  
  this.show=function(x){
    fill(240,10,40);
    rect(x*this.size,10,this.size/2,this.size);
    
  }
  
  
}