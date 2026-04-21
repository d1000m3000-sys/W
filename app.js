let movies = JSON.parse(localStorage.getItem('movies') || '[]');

function render() {
  let container = document.getElementById('movies');
  container.innerHTML = '';

  movies.forEach(m => {
    if (!m.approved) return;

    container.innerHTML += `
      <div class="card">
        <img src="${m.thumb}">
        <h4>${m.title}</h4>
        <video controls src="${m.video}"></video>
      </div>
    `;
  });
}

function upload() {
  let movie = {
    title: document.getElementById('title').value,
    thumb: document.getElementById('thumb').value,
    video: document.getElementById('video').value,
    approved: false
  };

  movies.push(movie);
  localStorage.setItem('movies', JSON.stringify(movies));

  alert('تم رفع الفيلم، بانتظار الموافقة');
}

render();
