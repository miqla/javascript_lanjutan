// 1. HTML
const mhs = {
  nama: "mila",
  nrp: 158468123,
  email: "ulala@gmail.com",
};
const el = `<div>
<h2>${mhs.nama}</h2>
<p>${mhs.nrp}</p>
</div>`;

document.body.innerHTML = el;

// 2. Looping
const barudak = [
  {
    nama: "mila",
    email: "mila@gmail.com",
  },
  {
    nama: "erik",
    email: "erik@gmail.com",
  },
  {
    nama: "dodi",
    email: "dodi@gmail.com",
  },
];
const element = `<div class="brd">
  ${barudak
    .map(
      (b) => `<ul>
    <li>${b.nama}</li>
    <li>${b.email}</li>
  </ul>`
    )
    .join(``)}
</div>`; // join untuk menghapus koma di array nya

document.body.innerHTML = element;

// 3. Conditionals: ternary function
const lagu = {
  judul: "kau adalah",
  penyanyi: "Isyana Sarasvati",
  feat: "Rayi saputra",
};

const pLagu = `<div>
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
</ul>
</div>`;
// jika ada lagu.feat, maka .., jika tidak ..

document.body.innerHTML = pLagu;

// 4. Nested : HTML fragments bersarang
const mahasiswa = {
  nama: "mila",
  semester: 5,
  mataKuliah: [
    "web developer",
    "pemrograman web",
    "android developer",
    "dev Ops",
  ],
};

// ada cara yg lebih efektif, ini cuma contoh biar bersarang
function cetakMataKuliah(mataKuliah) {
  return `<ol>
    ${mataKuliah.map((m) => `<li>${m}</li>`).join("")}
  </ol>`;
}

const elem = `<div>
<h2>${mahasiswa.nama}</h2>
<span>Semester: ${mahasiswa.semester}</span>
<h4>Mata kuliah:</h4>
${cetakMataKuliah(mahasiswa.mataKuliah)}
</div>`;

document.body.innerHTML = elem;
