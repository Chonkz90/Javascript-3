/*
Hente noe fra HTML
Modifisere det i JS
Sende det tilbake til HTML
*/

// const projectCard = document.getElementByID("projectCard");

// En variabel som lagrer at vi henter et element som har ID-navnet projectCard
const projectCard = document.querySelector("#projectCard");
console.log(projectCard);

// en variabel som lagrer at vi lager et nytt element som er h3
const projectCardHeading = document.createElement("h3");
console.log (projectCardHeading);

// En variabel som lagrer at vi laget et img element.
const projectCardImage = document.createElement("img");
console.log(projectCardImage);

// En variabel som lagrer at vi laget et nytt p element.
const projectCardInfo = document.createElement("p");
console.log(projectCardInfo);

// Gir elementet som ble lagret noe text innhold.
projectCardHeading.textContent = "Mitt prosjekt 2";

// Gir elementet som ble laget en class.
projectCardHeading.classList.add("projectTitle");

// gir img elementet en src.
projectCardImage.src = "HousePS1.jpg";

// gir img elementet vi laget en alt
projectCardImage.alt = "Photoshoppet bilde av Gregory House";

// gir img elementet vi laget en class
projectCardImage.classlist.add(projectImage);

// Gir p elementet vi laget noe tekst innhold.
projectCardInfo.textContent= "I dette prosjektet brukte jeg";

// Elementet vi hentet får elementet vi laget
projectCard.appendChild(projectCardHeading);

// img-elementet vi laget blir lagt til div elementet vi hentet
projectCard.appendChild(projectCardImage);

// p-elementet vi laget blir lagt til div elementet
projectCard.appendChild(projectCardInfo);

// 
// 

const businessCard = document.querySelector("#businessCard");
console.log (businessCard);

businessCard.innerHTML = `
<h3>Tomas Erdal </h3>
<img class="projectImage"<img src="HousePS1.jpg"
alt=photoshop />
<p>Meme Lord</p> `

const businessCardHeading = document.createElement("h3");
console.log (businessCardHeading);

const businessCardImage = document.createElement("img");
console.log (businessCardImage);

const businessCardInfo = document.createElement("p");
console.log (businessCardInfo);

projectCardHeading.textContent = "Tomas Erdal";

