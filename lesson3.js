// a 7 numbers, starting from 0 
for(i=0;i<7;i++){
    console.log(i)
}

//b n numbers, starting from 0, n entered by user
let n =prompt('nhap n')
for(i=0;i<n;i++){
    console.log(i)
}
//c A sequence of numbers, starting from 3, ending before n, n entered by user
let n =prompt('nhap n')
for(i=3;i<n;i++){
    console.log(i)
}

//d A sequence of numbers, starting from c, ending before n, c and n entered by
// user
let n =prompt('nhap n')
let c=prompt('nhap c')
for(i=c;i<n;i++){
    console.log(i)
}

//e A sequence of numbers, starting from c, ending before n, stepping by 3, c and
// n entered by user
let n =Number(prompt('nhap n'))
let c=Number(prompt('nhap c'))
for(i=c;i<n;i+=3){
    console.log(i)
}

// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n
// and s entered by user

let n =Number(prompt('nhap n'))
let c=Number(prompt('nhap c'))
let s=Number(prompt('nhap s'))
for(i=c;i<n;i+=s){
    console.log(i)
}
//

