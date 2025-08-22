// Data tamu
const guests = [
  { name: "ADELA AURELLIA MIRANDA CLARENCE", note: "Undangan" },
  { name: "ADELIA", note: "Undangan" },
  { name: "AMANDA NURJAYANTI", note: "Undangan" },
  { name: "AULIA ZAHROTUNNISA", note: "Undangan" },
  { name: "CHANDRA YUDHA PRATAMA", note: "Undangan" },
  { name: "CINTA TANIA PUTRI", note: "Undangan" },
  { name: "CITRA RISTIANI", note: "Undangan" },
  { name: "CLARISSA ZAHRAH SALSABILLA", note: "Undangan" },
  { name: "EARLYTHA SAZKIANA", note: "Undangan" },
  { name: "ELISA MAULIDINA", note: "Undangan" },
  { name: "FAWWAZ RAMDANA ADI PRASETYA", note: "Undangan" },
  { name: "HASBI AMBAR JAGAD DHITA", note: "Undangan" },
  { name: "IFAN", note: "Undangan" },
  { name: "INDI AGUSTIYANI", note: "Undangan" },
  { name: "JEIHAN AZKA SYAIRA", note: "Undangan" },
  { name: "KAYLA FAKHIRA", note: "Undangan" },
  { name: "KEYSHA SALSABILA", note: "Undangan" },
  { name: "M. MATTHEW JULFAHRI AL FATAH", note: "Undangan" },
  { name: "MARSHA AULIANTI", note: "Undangan" },
  { name: "MUHAMMAD RIFQI NUGRAHA", note: "Undangan" },
  { name: "MUHAMMAD RULLY AUFA SIDQI", note: "Undangan" },
  { name: "NADIN MAHA FAUZIA KHAMISHA", note: "Undangan" },
  { name: "NADIRA ARRUMAISHA", note: "Undangan" },
  { name: "NAJMI NAFISAH", note: "Undangan" },
  { name: "NAURA QUROTUAIN", note: "Undangan" },
  { name: "NAURAH NABILLAH", note: "Undangan" },
  { name: "NAZRIL ZAELANI", note: "Undangan" },
  { name: "NEYSA SURYA ARDELIA", note: "Undangan" },
  { name: "PEBY ANGGRAENI", note: "Undangan" },
  { name: "RAFIF DWI JUNIAN SATYA", note: "Undangan" },
  { name: "RIFA AZNIDA PUTRI", note: "Undangan" },
  { name: "SYAKILA PUTRI NADHIRA", note: "Undangan" },
  { name: "VERLITA AURELIA WAHYUDI", note: "Undangan" },
  { name: "WIDI AYU NURDIANTI", note: "Undangan" },
  { name: "WILDAN PRIMADONI SAPAAT", note: "Undangan" },
  { name: "TASYA VANIA OPHELIA", note: "Undangan" },
  { name: "CAROLINE JEREMIAH", note: "Undangan" },
  { name: "BEWARA ZAHRA WAHYUDI", note: "Undangan" },
  { name: "ALIFA KHALIFAH GHAISANI", note: "Undangan" },
  { name: "JESICA TIAN ANGGRAINI", note: "Undangan" },
  { name: "RICHIE SIVALI", note: "Undangan" },

  // Tambahan kelas 9B
  { name: "Nabil 9B", note: "Undangan" },
  { name: "Clarissa 9B", note: "Undangan" },
  { name: "Manda 9B", note: "Undangan" },
  { name: "Desvita 9B", note: "Undangan" },
  { name: "Zee 9B", note: "Undangan" },
  { name: "Fathur 9B", note: "Undangan" },
  { name: "Meydina 9B", note: "Undangan" },
  { name: "Naura 9B", note: "Undangan" },
  { name: "Adel 9B", note: "Undangan" },
  { name: "Gilang 9B", note: "Undangan" },
  { name: "Kirana 9B", note: "Undangan" },
  { name: "Medina 9B", note: "Undangan" },
  { name: "Myiesha 9B", note: "Undangan" },
  { name: "Nabiyya 9B", note: "Undangan" },
  { name: "Jovita 9B", note: "Undangan" },
  { name: "Narlita 9B", note: "Undangan" },
  { name: "Vanessa 9B", note: "Undangan" },
  { name: "Salsabila 9B", note: "Undangan" },
  { name: "Neysa 9B", note: "Undangan" },
  { name: "Adhya 9B", note: "Undangan" },
  { name: "Syidiq 9B", note: "Undangan" },
  { name: "Rifka 9B", note: "Undangan" },
  { name: "Zahra 9B", note: "Undangan" },
  { name: "Raka Nurul 9B", note: "Undangan" },
  { name: "Raka 9B", note: "Undangan" },
  { name: "Firda 9B", note: "Undangan" },

  // Tambahan jemaat gereja
  { name: "Kiki", note: "Undangan" },
  { name: "Tesa", note: "Undangan" },
  { name: "Icha", note: "Undangan" },
  { name: "Darryl", note: "Undangan" },
  { name: "Kim", note: "Undangan" },
  { name: "Grace", note: "Undangan" },
  { name: "Jojo", note: "Undangan" },
  { name: "Zaka", note: "Undangan" },
  { name: "Daniel", note: "Undangan" },
  { name: "Riky", note: "Undangan" },
  { name: "Anggie", note: "Undangan" },
  { name: "Beauty", note: "Undangan" },
  { name: "Dell", note: "Undangan" },
  { name: "Vanser", note: "Undangan" },
  { name: "Daman", note: "Undangan" },
  { name: "Ocha", note: "Undangan" },
  { name: "Nikson", note: "Undangan" },
  { name: "Anes", note: "Undangan" },
  { name: "Christian", note: "Undangan" },
  { name: "Evan", note: "Undangan" },
  { name: "Aldi", note: "Undangan" },
  { name: "Kezia", note: "Undangan" },
  { name: "Arnold", note: "Undangan"},
  { name: "Justin Putra Wirawan", note: "Undangan" },
  { name: "Kimberlyne", note: "Undangan" },
  { name: "Brigitha Evelyne", note: "Undangan" },
  { name: "Feynita", note: "Undangan" }

];

// Buat inisial dari nama
function initialsFrom(name) {
  return name.split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0,3).toUpperCase();
}

// Render daftar tamu
function initGuestList() {
  const host = document.getElementById('guestList');
  host.innerHTML = '';
  guests.slice().sort((a,b)=>a.name.localeCompare(b.name)).forEach(g=>{
    const card = document.createElement('div');
    card.className = 'guest-card';
    card.setAttribute('data-name', g.name.toLowerCase());
    card.innerHTML = `
      <div class="guest-avatar">${initialsFrom(g.name)}</div>
      <div class="guest-info">
        <h3>${g.name}</h3>
        <p>${g.note}</p>
      </div>`;
    host.appendChild(card);
  });
}

// Cari tamu
function searchGuest() {
  const q = document.getElementById('guestName').value.trim().toLowerCase();
  const ok = document.getElementById('successNotification');
  const err = document.getElementById('errorNotification');
  ok.style.display = 'none'; 
  err.style.display = 'none';
  document.querySelectorAll('.guest-card').forEach(c=>c.classList.remove('highlight'));

  if(!q) return;
  const card = document.querySelector(`.guest-card[data-name="${q}"]`);
  if(card){
    ok.style.display = 'block';
    card.classList.add('highlight');
    card.scrollIntoView({behavior:'smooth',block:'center'});
  } else {
    err.style.display = 'block';
  }
}

// Countdown
function startCountdown() {
  const target = new Date("Aug 23, 2025 17:30:00").getTime();
  const status = document.getElementById("eventStatus");
  setInterval(()=>{
    const now = new Date().getTime();
    const diff = target - now;
    if(diff <= 0){
      document.getElementById("countdown").style.display = "none";
      status.textContent = "🎉 Acara sudah dimulai!";
      return;
    }
    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m = Math.floor((diff%(1000*60*60))/(1000*60));
    const s = Math.floor((diff%(1000*60))/1000);
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
  },1000);
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', ()=>{
  initGuestList();
  startCountdown();

  document.getElementById('searchBtn').addEventListener('click', searchGuest);
  document.getElementById('guestName').addEventListener('keypress', e=>{
    if(e.key === 'Enter'){
      searchGuest();
    }
  });
});

