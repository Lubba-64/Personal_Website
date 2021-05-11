// adds a header to the document in question automatically
let Pages = [
    {P:"index.html",N:"Home"},
    {P:"MyWork.html",N:"My Work"},
    {P:"WhoAmI.html",N:"About Me"},
    {P:"Contact.html",N:"Contact"},
];
let Socials = [
    {S:`https://github.com/Lubba-64`,N:"Github",IMG:"Images/github.png"}
]
function AddHeader(ID){
    var addto = document.getElementById(ID);
    var HeaderHTML = `<header class="MainPageHeader" id="MainPageHeader"></header>`;
    addto.innerHTML = HeaderHTML + addto.innerHTML;

    var HeaderInner = ``;
    Pages.forEach(page =>{
        var Text = `<p class="HeaderButtonText">${page.N}</p>`;
        HeaderInner += `<a href="${page.P}"><button class="HeaderButton">${Text}</button></a>`;
    });
    Socials.forEach(social =>{
        var Image = `<img src="${social.IMG}" alt="!" class="SocialImage">`
        var Text = `<p class="HeaderButtonText" style="padding-right: 3px;">${social.N}</p>`;
        HeaderInner += `<a href="${social.S}" target="_blank"><button class="HeaderButton">${Text}${Image}</button></a>`;
    });
    var Header = document.getElementById("MainPageHeader");
    Header.innerHTML = `<div class="HeaderButtonContainer">${HeaderInner}</div>`;
}