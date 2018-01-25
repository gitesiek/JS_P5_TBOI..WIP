function Tear(player,directx,directy){
  this.x=player.x;
  this.y=player.y;
  this.size=30;
  this.dirx=directx;
  this.diry=directy;
  this.player=player;
  this.startPos=[this.x,this.y];
  
  this.show=function(){
    fill(10,0,255);
    ellipse(this.x,this.y,this.size);     
  }
  
  this.update=function(){
    this.x+=this.dirx;
    this.y+=this.diry;
    if(abs(this.startPos[0]-this.x)>player.range || abs(this.startPos[1]-this.y)>player.range)
    this.del=true;
  }
}