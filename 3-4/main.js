// **コマンドライン引数で受け取った2つの数字を反転させて足し算する**
const a = (process.argv[2]);
const b = (process.argv[3]);
total = 0;
function gyakuten(n){
    n = Number(n.split("").reverse().join(""));
    total += n
}
gyakuten(a);
gyakuten(b);
console.log(total);

// function gyakuten(n){
//     N = [];
//     for (let i = 0; i < n.length; i++){
//         let m = n.charAt(i);
//         N.push(m);
//     }
//     N = Number(N.join());
//     total += N;
// }