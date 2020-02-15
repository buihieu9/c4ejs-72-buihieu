// 13. (Optional) Use JS Turtle to draw n polygons, n entered by users
clear()
let n=Number(prompt('enter number of edges'))+2;

for(i=3;i<=n;i++){
   for(j=0;j<i;j++){
fd(50)
lt(360/i)
   }
}