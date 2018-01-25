mesh=[];
rooms=3;
cols=11;
rows=7;
for(var i=0;i<rooms;i++)
  {
    mesh[i]=new Array(cols);
    for(var j=0;j<cols;j++){
     mesh[i][j]=new Array(rows); 
    }
  } 
room=0;
col=0;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,10),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,10),
new Block(10,col,10)
];
col++;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,100),
new Block(10,col,10)
];
col++;
mesh[0][col]=[
new Block(0,col,100),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,100),
new Block(10,col,100)
];
col++;
mesh[0][col]=[
new Block(0,col,100),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,100),
new Block(10,col,100)
];
col++;
mesh[0][col]=[
new Block(0,col,100),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,100),
new Block(10,col,100)
];
col++;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,100),
new Block(10,col,10)
];
col++;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,10),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100),new Block(7,col,100),
new Block(8,col,100),new Block(9,col,10),
new Block(10,col,10)
];
col++;
mesh[0][col]=[
new Block(0,col,100),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100)
];
col++;
mesh[0][col]=[
new Block(0,col,100),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,100)
];
col++;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,100),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,100),
new Block(6,col,10)
];
col++;
mesh[0][col]=[
new Block(0,col,10),new Block(1,col,10),
new Block(2,col,100),new Block(3,col,100),
new Block(4,col,100),new Block(5,col,10),
new Block(6,col,10)
];
col++;
room++;