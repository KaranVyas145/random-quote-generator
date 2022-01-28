const generateBtn = document.querySelector(".generate");
const quote = document.querySelector(".quote");

generateBtn.addEventListener("click", () => {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    const load=document.createElement('div');
    load.classList.add("load");
    if(this.readyState<4){
        quote.innerText="";
        quote.appendChild(load);
    }
    else{
        load.remove();
        let m=JSON.parse(this.responseText);
        quote.innerHTML=` 
        <p>${m.content}</p>
        <p>- ${m.originator.name}</p> 
        `;
    } 
    
  });

  xhr.open("GET", "https://quotes15.p.rapidapi.com/quotes/random/");
  xhr.setRequestHeader("x-rapidapi-host", "quotes15.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    `${api.key}`
  );

  xhr.send(data);
});
