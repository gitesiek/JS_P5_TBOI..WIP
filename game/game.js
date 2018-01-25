let tileSize=80;
var player;
function setup() {
createCanvas(tileSize*cols+1,tileSize*rows+1);
 
  player=new Player(5*tileSize+tileSize/3,3*tileSize+tileSize*0.1,"Isaac");
  
}

function draw() {

background(51);
//fill(255);
  for(var i=cols-1;0<=i;i--)
  {
    for(var j=rows-1;0<=j;j--)
    {
      if(mesh[0][j][i].type<2) {
       player.checkCollision(mesh[0][j][i]);
      }
       mesh[0][j][i].show();
      }
    }
    
  player.show();  
  
   for(var i=player.healthctrs.length-1;i>=0;i--){
     player.healthctrs[i].show(i); 
   }
  
  if(keyIsDown(87)) player.move(0,-player.speed);
  if(keyIsDown(83)) player.move(0,player.speed);
  if(keyIsDown(65)) player.move(-player.speed,0);
  if(keyIsDown(68)) player.move(player.speed,0);
  
  if(frameCount%player.fireRate==0){
  if(keyIsDown(37)) player.tears.push(new Tear(player,-player.shotSpeed,0));
  else if(keyIsDown(38)) player.tears.push(new Tear(player,0,-player.shotSpeed));
  else if(keyIsDown(39)) player.tears.push(new Tear(player,player.shotSpeed,0));
  else if(keyIsDown(40)) player.tears.push(new Tear(player,0,player.shotSpeed));
  }
  
  for(var i=player.tears.length-1;i>=0;i--)
  {
    player.tears[i].show();
    player.tears[i].update();
    if(player.tears[i].del) player.tears.splice(i,1);
  }
}