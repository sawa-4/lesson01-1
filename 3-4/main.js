// **コマンドライン引数で受け取った2つの数字を反転させて足し算する**
const a = (process.argv[2]);
const b = (process.argv[3]);
total = 0;
function gyakuten(n){
    N = [];
    for (let i = n.length - 1; i >= 0; i--) {
        let m = n.charAt(i);
        N.push(m);
    }
    N = Number(N.join(""));
    total += N;
}
gyakuten(a);
gyakuten(b);
console.log(total);
// ググったら出てきたやつ
// function gyakuten(n){
//     n = Number(n.split("").reverse().join(""));
//     total += n
// }
// 自分で途中まで書いたやつ
// function gyakuten(n){
//     N = [];
//     for (let i = 0; i < n.length; i++){
//         let m = n.charAt(-i);
//         N.push(m);
//     }
//     N = Number(N.join());
//     total += N;
// }