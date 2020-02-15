Title: let​ vs ​var​ vs ​const 
1. What are ​var​ and ​const​ in JavaScript? 
    var: Dùng để khai báo biến truy cập trong JavaScript
    const: dùng để khai báo một hằng số, giá trị của nó sẽ không thay đổi trong suốt quá trình chạy
2. What are the differences between ​let​ and ​var​? 
    var: - có thể khai báo lại một biến đã được khai báo trước đó và không bị lỗi 
         - phạm vi biến được khai báo var là function-scoped (VD: nếu khai báo var ở trong một function thì trong function đó sẽ có thể
         dùng biến đó kể cá có ở ngoài block {} nào hay không )
         - khi một biến var được gọi trước rồi mới dược khai báo thì biến đó sẽ được kéo lên top và được khởi tạo với giá trị undefined
    let: - không thể khai báo lại cùng một biến 
         - phạm vi biến được khai báo let là bloc-scoped (VD: nếu khai báo let ở trong một block {} thì ở ngoài không thể dùng )
         - khi một biến let được gọi trước rồi mới khai báo thì sẽ bị lỗi 
3. What are the differences between ​let​ and ​const​? 
    let: - biến khai báo bởi let thì có thể update
    const: - biến const thì không thể re-declared và update.
4. What to use in what cases? 
    var : được dùng trong trường hợp biến đó được dùng trong cả hàm hoặc xuyên suốt chương trình.
    let : được dùng trong trường hợp biến đó chỉ được dùng trong một phạm vi nhất định.
    const : được dùng trong trường họp biến đó sẽ không thay đổi giá trị trong suốt chương trình.