
  const EMAILJS_PUBLIC_KEY  = "9V_ND8e40rvbPCMUA";
  const EMAILJS_SERVICE_ID  = "service_3gxoy3m";
  const EMAILJS_TEMPLATE_ID = "template_c4s6jgp";

  emailjs.init(EMAILJS_PUBLIC_KEY);

  function allerFormulaire() {
    document.getElementById('page-accueil').style.display = 'none';
    const fp = document.getElementById('page-formulaire');
    fp.style.display = 'flex';
    window.scrollTo(0, 0);
  }

  function retourAccueil() {
    document.getElementById('page-formulaire').style.display = 'none';
    document.getElementById('page-accueil').style.display    = 'block';
    window.scrollTo(0, 0);
  }

  function envoyerInscription() {
    const fullname = document.getElementById('fullname').value.trim();
    const pays     = document.getElementById('pays').value.trim();
    const ville    = document.getElementById('ville').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const errorEl  = document.getElementById('error-msg');

    errorEl.style.display = 'none';

    if (!fullname || !pays || !ville || !whatsapp) {
      errorEl.textContent   = "⚠️ Veuillez remplir tous les champs avant d'envoyer.";
      errorEl.style.display = 'block';
      return;
    }

    const btn     = document.getElementById('submitBtn');
    const btnText = document.getElementById('btn-text');
    const spinner = document.getElementById('spinner');
    btn.disabled          = true;
    btnText.style.display = 'none';
    spinner.style.display = 'block';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      fullname : fullname,
      pays     : pays,
      ville    : ville,
      whatsapp : whatsapp,
      to_email : "lesfruites46@gmail.com"
    })
    .then(() => {
      document.getElementById('form-area').style.display   = 'none';
      document.getElementById('success-msg').style.display = 'block';
    })
    .catch(() => {
      btn.disabled          = false;
      btnText.style.display = 'block';
      spinner.style.display = 'none';
      errorEl.style.display = 'block';
    });
  }

  function fermerMessage() {
    ['fullname','pays','ville','whatsapp'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('success-msg').style.display = 'none';
    document.getElementById('form-area').style.display   = 'block';
    const btn = document.getElementById('submitBtn');
    btn.disabled = false;
    document.getElementById('btn-text').style.display = 'block';
    document.getElementById('spinner').style.display  = 'none';
  }




