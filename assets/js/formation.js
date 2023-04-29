// Fonction avec message Sweet Alert2 lien associé à la formation

let titles = document.querySelectorAll(".title");

titles.forEach(function(title) {

  title.addEventListener('click', function() {
    let cheminPage = 'mBoulang.html';

    Swal.fire({
      title: 'Choisisez une formation',
      html: `<ul>
          <li><a href="${cheminPage}" class="swal2-styled">CQP OUVRIER(ERE) DE FABRICATION EN BOULANGERIE, VIENNOISERIE, PATISSERIE</a></li>
          <li><a href="${cheminPage}" class="swal2-styled">CUISINER(ERE)</a></li>
          <li><a href="${cheminPage}" class="swal2-styled">EMPLOYE(E) D'ETAGE EN HOTELLERIE</a></li>
          <li><a href="${cheminPage}" class="swal2-styled">SERVEUR(SE) EN RESTAURATION</a></li>
            </ul>
`,
      showCloseButton: true,
      showConfirmButton: false,
    })

  });
});

