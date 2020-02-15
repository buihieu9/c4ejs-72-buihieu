//Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let n =Number(prompt('nhap n'))
let j=1
for(i=1;i<=n;i++){
j=j*i
}
console.log(j)