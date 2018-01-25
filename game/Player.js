function Player(x,y,name){
 this.x=x;
 this.y=y;
 this.w=tileSize*0.3;
 this.h=tileSize*0.8;
 this.name=name;
 
 
 
 this.damage;
 this.fireRate;
 this.range;
 this.speed;
 this.shotSpeed;
 this.tears=[];
 this.healthctrs=[];
 
 if(this.name=="Isaac"){
 this.damage=5;
 this.fireRate=20;
 this.range=560;
 this.speed=5;
 this.shotSpeed=4;
 this.healthctrs=[new Health("red"),new Health("red"),new Health("red"),new Health("red"),new Health("red"),new Health("red"),];
 }
 
 this.show=function(){
 fill(239,103,130);
 rect(this.x,this.y,this.w,this.h);  

 }
 
 this.update=function(){

 }
 
 this.move=function(xmov,ymov){
 this.x+=xmov;
 this.y+=ymov;
 }
 this.checkCollision=function(collider){
   if(this.x>collider.x && this.x<collider.x+collider.w 
   && this.y>collider.y && this.y<collider.y+collider.h
   || this.x+this.w>collider.x && this.x<collider.x+collider.w 
   && this.y+this.h>collider.y && this.y<collider.y+collider.h){   
     if(this.x<collider.x+collider.w && this.x>collider.x)
     this.move(this.speed,0);
     if(this.x+this.w>collider.x && this.x+this.w<collider.x+collider.w)
     this.move(-this.speed,0);
     if(this.y<collider.y+collider.h && this.y>collider.y)
     this.move(0,this.speed);
     if(this.y+this.h>collider.y && this.y+this.h<collider.y+collider.y)
     this.move(0,-this.speed);
   }
     
 }
  
}