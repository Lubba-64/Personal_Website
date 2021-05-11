// adds a header to the document in question automatically
let Pages = [
    {P:"Index.html",N:"Home"},
    {P:"Pages/MyWork/MyWork.html",N:"My Work"},
    {P:"Pages/WhoAmI/WhoAmI.html",N:"About Me"},
    {P:"Pages/Contact/Contact.html",N:"Contact"},
];
let Socials = [
    {S:`https://github.com/Lubba-64`,N:"Github",IMG:"Images/github.png"}
]
let InnerPath = "/Personal_Website/"
function AddHeader(ID,NotInRoot){
    var addto = document.getElementById(ID);
    var HeaderHTML = `<header class="MainPageHeader" id="MainPageHeader"></header>`;
    addto.innerHTML = HeaderHTML + addto.innerHTML;

    var HeaderInner = ``;
    Pages.forEach(page =>{
        console.log((NotInRoot?InnerPath:"")+page.P);
        var Text = `<p class="HeaderButtonText">${page.N}</p>`;
        HeaderInner += `<a href="${(NotInRoot?"/":"")+page.P}"><button class="HeaderButton">${Text}</button></a>`;
    });
    Socials.forEach(social =>{
        var Image = `<img src="${(NotInRoot?InnerPath:"")+social.IMG}" alt="!" class="SocialImage">`
        var Text = `<p class="HeaderButtonText" style="padding-right: 3px;">${social.N}</p>`;
        HeaderInner += `<a href="${social.S}" target="_blank"><button class="HeaderButton">${Text}${Image}</button></a>`;
    });
    var Header = document.getElementById("MainPageHeader");
    Header.innerHTML = `<div class="HeaderButtonContainer">${HeaderInner}</div>`;
}