export function loadRegisterPage() {
  const app = document.getElementById('app');
  app.innerHTML = ''; 

  // Ambil form dan input dari DOM
  const form = document.querySelector('#offcanvasExample form');
  const nameInput = document.getElementById('register-name');
  const emailInput = document.getElementById('register-email');
  const passwordInput = document.getElementById('register-password');

  if (!form || !nameInput || !emailInput || !passwordInput) {
    console.error('Form atau input tidak ditemukan di DOM.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    try {
      const res = await fetch('http://127.0.0.1:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registrasi berhasil!');
        form.reset();
        
        const offcanvasEl = document.getElementById('offcanvasExample');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
        window.location.hash = '#/';
      } else {
        alert(data.error || 'Registrasi gagal!');
      }
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat register.');
    }
  });
}
