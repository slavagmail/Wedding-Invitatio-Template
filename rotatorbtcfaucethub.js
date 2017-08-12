var s=[
"http://faucethub.io/r/7947815",
"http://faucethub.io/r/7947815",
"https://bituniverse.net/ref/1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://huefaucet.xyz/ref/1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://btcforclicks.io/ref/1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://luckybtcfaucet.website/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://btc.cryptodrops.net/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://faucetincome.com/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://www.ref-hunters.ch/btcforever/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://faucet.geekhash.org/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://www.instantbtc.net/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://bitgolden.io/ref/1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://www.fautsy.com/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://bitsilver.io/ref/1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://xoloniex.info/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",
"https://btcforeveryone.xyz/?r=1FMJdr9t5V9Yf5qbPR3t19rJswdMf7X6YJ",



];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}