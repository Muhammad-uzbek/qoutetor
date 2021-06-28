//const { image } = require("html2canvas/dist/types/css/types/image");

let quote = document.querySelector(".qoutetw");
let author = document.querySelector(".authortw");
let block = document.querySelector(".image-block");
let btn= document.querySelector(".download-button");
let changefont = document.querySelector("#changefontp2");
let changeimg = document.querySelector("#changeimgp2");
let img= document.querySelector(".realimage");
let styleblock = document.querySelector(".style-block-tw");
let images = ['estetik.jpeg','estetik1.jpeg', 'night.jpeg', 'night1.jpeg', 'dusk.jpeg','night2.jpeg', 'sky1.jpeg'];
async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random?maxLength=50')
  const data = await response.json()
  if (data.content.length<30){
    quote.innerHTML=`${data.content}`;
  }else{
    quote.innerHTML=`${data.content}`;
  }
  let dataAu= data.author;
  if(dataAu.length<15){
     author.innerHTML=data.author;
  } else{
      dataAu= data.author.split(" ");
      author.innerHTML= dataAu[0].slice(0,1)+"."+dataAu[dataAu.length-1];
      console.log(dataAu);
  }
}
randomQuote()

btn.addEventListener('click', ()=>{
  html2canvas(block).then(canvas =>{
      saveAs(canvas.toDataURL(), 'Photos')
  })
});

function saveAs(url, fileName){
  let link = document.createElement("a");
  link.href = url;
  link.download= fileName;
  link.click();
}
changefont.addEventListener("click",()=>{
  let fonts=['Helvetica', 'monospace','Brush Script MT', 'Times New Roman'];
  quote.style.fontFamily= fonts[count(fonts.length)];
});

changeimg.addEventListener("click",()=>{
   img.src='../img/'+images[count(images.length-1)];
});
// async function pixabay(){
//     let url="https://pixabay.com/api/?key=22162484-3a43efc1ec849682073e5aa95&q=";
//     let types=['nature', 'science', 'Aesthetic', 'people', 'planet', 'city', 'mountain', 'industry', 'computer', 'food','sports', 'forest', 'travel', 'buildings', 'business'];
//     const datala= await fetch(url+types[count(types.length)]);
//     const json= await datala.json();
//     return json.hits[];
// }


//counter
let add=0
const count=(len)=>{
      if(add<len) add+=1;
      else add=0;
      return add;
}
