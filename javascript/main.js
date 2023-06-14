/*Truncate CardTitle*/
window.addEventListener("load",function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    let cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(let i = 0; i < cardList.length; i++){
        let text = cardList[i].innerHTML;
        cardList[i].innerHTML = truncateString(text, 35);
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}
/*Sidebar Mini*/
let toggleBtn = document.querySelector('.sidebar__icon');
let sidebarMini = document.querySelector('.sidebar-mini');
let switchBtn = document.querySelector('#checkbox');

toggleBtn.addEventListener('click', function(){
    sidebarMini.classList.toggle('sidebar__open');
});
switchBtn.addEventListener('click', function(){
    document.querySelector("body").classList.toggle('darkMode');
});