// 12. Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
clear()
let n=prompt('enter number of edges')
for(i=0;i<n;i++){
   fd(50)
   lt(360/n)
}
