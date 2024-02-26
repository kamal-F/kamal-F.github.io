export function setInner(id,content){
    document.getElementById(id).innerHTML = content;
}

setInner("demo1","demog 1 #1");
export function penjumlahan(a, b) {
    return a + b;
}

const result = penjumlahan(5, 3); // replace 5 and 3 with your desired numbers
setInner("demo2", `Result of penjumlahan: ${result}`);
