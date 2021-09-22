let request = new XMLHttpRequest();

request.open("GET","https://restcountries.eu/rest/v2",true);

request.send();

request.onload = () => {
    let data = JSON.parse(request.response);
    data.forEach((item) => {
      const div1 = document.createElement("div");
      div1.classList.add("card");
      document.querySelector("body").appendChild(div1);
      const h1 = document.createElement("h2");
      const h2 = document.createTextNode(item.name);
      h1.appendChild(h2);
      div1.appendChild(h1); 
      const image = document.createElement("img");
      image.setAttribute("src",item.flag);
      image.classList.add("image");
      div1.appendChild(image);
      const h3 = document.createElement("h3");
      h3.innerHTML = ("capital:");
      h3.classList.add("top");
      const h31 = document.createElement("span")
      const h32 = document.createTextNode(item.capital);
      h31.appendChild(h32);
      h3.appendChild(h31);
      div1.appendChild(h3); 
      const h4 = document.createElement("h3");
      const h41 = document.createTextNode("Country Codes: "+item.alpha2Code);
      h4.appendChild(h41);
      div1.appendChild(h4); 
      const h5 = document.createElement("h3");
      const h51 = document.createTextNode("Region: "+item.region);
      h5.appendChild(h51);
      div1.appendChild(h5); 
      const h6 = document.createElement("h3");
      const h61 = document.createTextNode("Latlng: "+item.latlng);
      h6.appendChild(h61);
      div1.appendChild(h6); 
      const h7 = document.createElement("h3");
      const h71 = document.createTextNode("Currency Code: " +item.currencies[0].code);
      h7.appendChild(h71);
      div1.appendChild(h7); 
      const h8 = document.createElement("h3");
      const h81 = document.createTextNode("Currency name: "+item.currencies[0].name);
      h8.appendChild(h81);
      div1.appendChild(h8); 
      const h9 = document.createElement("h3");
      const h91 = document.createTextNode("Currency symbol: " +item.currencies[0].symbol);
      h9.appendChild(h91);
      h9.classList.add("bottom");
      div1.appendChild(h9); 
     } );
};








