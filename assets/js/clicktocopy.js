document.getElementById("copier-btn").addEventListener("click", function() {
    const texte = this.innerText; // récupère le texte du bouton
    navigator.clipboard.writeText(texte).then(() => {
        alert("Texte copié : " + texte);
    });
});

