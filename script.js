const elements = [
  { number: 1, symbol: 'H', name: 'Hydrogen', atomicMass: '1.008' },
  { number: 2, symbol: 'He', name: 'Helium', atomicMass: '4.0026' },
  { number: 3, symbol: 'Li', name: 'Lithium', atomicMass: '6.94' },
  { number: 4, symbol: 'Be', name: 'Beryllium', atomicMass: '9.0122' },
  { number: 5, symbol: 'B', name: 'Boron', atomicMass: '10.81' },
  { number: 6, symbol: 'C', name: 'Carbon', atomicMass: '12.011' },
  { number: 7, symbol: 'N', name: 'Nitrogen', atomicMass: '14.007' },
  { number: 8, symbol: 'O', name: 'Oxygen', atomicMass: '15.999' },
  { number: 9, symbol: 'F', name: 'Fluorine', atomicMass: '18.998' },
  { number: 10, symbol: 'Ne', name: 'Neon', atomicMass: '20.180' },
  { number: 11, symbol: 'Na', name: 'Sodium', atomicMass: '22.990' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: '24.305' },
  { number: 13, symbol: 'Al', name: 'Aluminium', atomicMass: '26.982' },
  { number: 14, symbol: 'Si', name: 'Silicon', atomicMass: '28.085' },
  { number: 15, symbol: 'P', name: 'Phosphorus', atomicMass: '30.974' },
  { number: 16, symbol: 'S', name: 'Sulfur', atomicMass: '32.06' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: '35.45' },
  { number: 18, symbol: 'Ar', name: 'Argon', atomicMass: '39.948' },
  { number: 19, symbol: 'K', name: 'Potassium', atomicMass: '39.098' },
  { number: 20, symbol: 'Ca', name: 'Calcium', atomicMass: '40.078' },
];

const table = document.getElementById('periodic-table');
const info = document.getElementById('element-info');
const searchInput = document.getElementById('search');

// Function to render the periodic table
function renderTable() {
  table.innerHTML = '';
  elements.forEach(el => {
    const tile = document.createElement('div');
    tile.className = 'element-tile';
    tile.innerHTML = `<strong>${el.symbol}</strong><br>${el.number}`;
    tile.onclick = () => displayInfo(el);
    table.appendChild(tile);
  });
}

// Function to display selected element's information
function displayInfo(el) {
  info.innerHTML = `
    <h2>${el.name} (${el.symbol})</h2>
    <p><strong>Atomic Number:</strong> ${el.number}</p>
    <p><strong>Atomic Mass:</strong> ${el.atomicMass}</p>
  `;
}

// Search functionality
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const found = elements.find(el =>
    el.name.toLowerCase() === query || el.symbol.toLowerCase() === query
  );
  if (found) displayInfo(found);
  else info.innerHTML = '<p>No element found. 😢</p>';
});

// Initial rendering of the periodic table
renderTable();
