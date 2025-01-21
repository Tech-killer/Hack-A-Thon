const token = localStorage.getItem('token');

async function addSosNumber() {
  const sosNumber = document.getElementById('sos-number').value;

  const response = await fetch('http://localhost:3000/add-sos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, sosNumber }),
  });

  const data = await response.json();
  alert(data.message);
}

async function addRating() {
  const area = document.getElementById('area-name').value;
  const rating = document.getElementById('area-rating').value;

  const response = await fetch('http://localhost:3000/add-rating', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, area, rating }),
  });

  const data = await response.json();
  alert(data.message);
}
