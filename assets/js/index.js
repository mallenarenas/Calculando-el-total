document.querySelector("#button").addEventListener("click", ()=>{
    document.querySelector('p .total').innerHTML = document.querySelector("#precio").value*document.querySelector('#input-1').value;
    document.querySelector('p .cantidad').innerHTML = document.querySelector('#input-1').value;
    document.querySelector('p .color_laptopt').style.color = document.querySelector('#input-2').value;
})