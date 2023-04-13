const data = [
    {
        id:1,
        authname:"-Oscar Wilde",
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    },
    {
        id:2,
        authname:"-Emily Dickinson",
        quote:"That it will never come again is what makes life so sweet.",
    },
    {
        id:3,
        authname:"-George Eliot",
        quote:"It is never too late to be what you might have been.",
    },
    {
        id:4,
        authname:"-Ralph Waldo Emerson",
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    },
    {
        id:5,
        authname:"-Haruki Murakami",
        quote:"Pain is inevitable. Suffering is optional.",
    },
];
const btn=document.querySelector("#btn");
const quote=document.querySelector("#quote");
const authname=document.querySelector("#authname");
const cpy=document.querySelector("cpy");
let index=0;
window.addEventListener("DOMContentLoaded",function (){
const testmonial=data[0];
loadTestimonial(testmonial);

});
function loadTestimonial(data){
authname.textContent=data.authname;
quote.textContent=data.quote;
}
btn.addEventListener("click",function (){
    index++;
    if(index>data.length-1)
    {
        index=0;
    }
    loadTestimonial(data[index]);
});
/*cpy.addEventListener("click",function(){
var cpy=document.querySelector('#cpy').innerText;
var input = document.getElementById("quote").value;
navigator.clipboard.writeText(input);
alert("Copied Text: " + input);
})*/

function handleClick() {
   document.execCommand("COPY");
    alert("Copied Text: " + input);
}
