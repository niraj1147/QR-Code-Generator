let qrText = document.getElementById("qr-text");
let sizes  = document.getElementById("sizes");
let generateBtn = document.getElementById("generateBtn");
let downloadBtn = document.getElementById("downloadBtn");

let qrContainer = document.querySelector(".qr-body");

let size =sizes.value;

let clear = document.getElementById('clear');

sizes.addEventListener('change', (e)=> {
    size=e.target.value;
    isEmptyInput();
});

generateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    isEmptyInput();
});

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }else{
        qrContainer.innerHTML = "";
        alert("Enter the text or URL to generate your QR code");
    }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
     new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

downloadBtn.addEventListener('click', () =>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href' ,imgAttr);
    }else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

//clear button

clear.addEventListener('click', () =>{
    qrText.value="";
    qrContainer.innerHTML="";
})
