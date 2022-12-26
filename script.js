const form = document.querySelector('#nameForm');
let totalNames = 0;

form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const table = document.querySelector('#nameTable');
    const row = document.createElement('tr');
    row.style.backgroundColor = '#f2f2f2';
    const cell = document.createElement('td');
    cell.style.width = '490px';
    cell.style.padding = '20px';
    cell.textContent = name;
    row.appendChild(cell);
    table.appendChild(row);
    document.querySelector('#name').value = '';
    const rowCount = document.querySelectorAll('#nameTable tr').length;
    totalNames = rowCount - 1;
    console.log(totalNames);
    createSpinWheel(totalNames);
});

const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', saveData);



function createSpinWheel(totalNames) {
  const colors = ['#2b580c', '#afa939', '#f7b71d', '#fdef96'];
  let gradient = '';
  for (let i = 0; i < totalNames; i++) {
    if(i==0){
      gradient += `${colors[i % colors.length]} ${360 / totalNames * i}deg, ${colors[i % colors.length]} ${360 / totalNames * i}deg, `;
    }
    else if(i==1){
      gradient  = `${colors[0]} ${360 / totalNames * 0}deg, ${colors[0]} ${360 / totalNames * 1}deg, `;
      gradient += `${colors[i % colors.length]} ${360 / totalNames * i}deg, ${colors[i % colors.length]} ${360 / totalNames * (i+1)}deg, `;
    }
    else{
      gradient += `${colors[i % colors.length]} ${360 / totalNames * i}deg, ${colors[i % colors.length]} ${360 / totalNames * (i+1)}deg, `;
    }
  }
  gradient = gradient.slice(0, -2);  // remove the last comma
  document.getElementById('spinWheel').style.backgroundImage = `conic-gradient(${gradient})`;
}
function saveData(){
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');
  const data = [];
  
  for (const row of rows) {
    const cells = row.querySelectorAll('td');
    const rowData = {};
    for (const cell of cells) {
      const key = cell.textContent;
      const value = cell.textContent;
      rowData[key] = value;
    }
    data.push(rowData);
  }
  
  const json = JSON.stringify(data);
  console.log(json);
  alert("JSON LOG SAVED!!!")
}