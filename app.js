// // FONCTION POUR FLIP LES CARDS
const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});



// FONCTION POUR FAIRE REMPLACER L'IMAGE PAR LE TEXTE LORS DU FLIP
// function gradient(id, level)
// {
// 	var box = document.getElementById(id);
// 	box.style.opacity = level;
// 	box.style.MozOpacity = level;
// 	box.style.KhtmlOpacity = level;
// 	box.style.filter = "alpha(opacity=" + level * 100 + ")";
// 	box.style.display="block";
// 	return;
// }

// function fadein(id) 
// {
//     var level = 0;
//     while(level <= 1)
//     {
//         setTimeout( "gradient('" + id + "'," + level + ")", (level* 1000) + 10);
//         level += 0.01;
//     }
// }

// function showBack()
// {
//     fadein("card__body");
// } 