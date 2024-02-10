var thumbnails = document.querySelectorAll('.thumbnail');
var currentIndex = 0; // Index de l'image actuellement affichée

// Fonction pour changer l'image principale
function changeMainImage(newIndex) {
    var mainImage = document.getElementById('main-image');
    var selectedThumbnail = thumbnails[newIndex];
    mainImage.src = selectedThumbnail.src;
    currentIndex = newIndex;
}

// Clic sur la flèche gauche
document.getElementById('left-arrow').addEventListener('click', function() {
    if(currentIndex > 0) {
        changeMainImage(currentIndex - 1);
    }
});

// Clic sur la flèche droite
document.getElementById('right-arrow').addEventListener('click', function() {
    if(currentIndex < thumbnails.length - 1) {
        changeMainImage(currentIndex + 1);
    }
});

// Mise à jour de l'image principale au clic sur une vignette
for (var i = 0; i < thumbnails.length; i++) {
    (function(index){
        thumbnails[index].onclick = function() {
            changeMainImage(index);
        };
    })(i);
}
