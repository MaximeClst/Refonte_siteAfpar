//FONCTION POUR FLIP LES CARDS
(function changeClass(button) {
  var elements = button.parentNode.getElementsByClassName('card__inner');
  for (var i = 0; i < elements.lenght; i++) {
    if (elements[i].className == "card__inner") {
      elements[i].className += " rotated";
    }
    else if (elements[i].className == "card__content") {
      elements[i].className += " rotated";
    }
    else {
      elements[i].className = "card__content";
    }
  }
})();



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