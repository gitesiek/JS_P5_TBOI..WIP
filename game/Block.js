function Block(x,y,type){
  this.tileSize=80;
  this.x=x*this.tileSize;
  this.y=y*this.tileSize;
  this.w=this.h=this.tileSize
  if(type<5) this.type=0;
  else if(type<15) this.type=1;
  else this.type=2;
  
  this.show=function(){
    if(this.type==0) {this.r=178 ;this.g=171 ;this.b=169 ;}
    if(this.type==1) {this.r=90 ;this.g=90 ;this.b=90 ;}
    if(this.type==2) {this.r=209 ;this.g=64 ;this.b=12 ;}
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.w,this.h);  
  }
}
