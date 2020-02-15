//7. Write a program asking user to enter two numbers, x and n, then check if x is in lower
// half or higher half of n
let n =Number(prompt('enter n='))
let x= Number(prompt('enter x='))
if(x<n){
    alert(x+'is in lower half of'+n)
}else{alert(x+'is in higher half of'+n)}