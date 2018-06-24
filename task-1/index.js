/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];
  let x = 0;
  let y = 0;
  let steps = n -1;
  for(let i = 0; i < n; i++){result[i] = []};
  for(let i = 1; i <= n*n; i++){
    result[x][y] = i;
    if(x === steps && y === n - steps - 1) steps--;
    if((y >= x && y < steps) || (x - 1 === y && x === n - steps - 1)) y++;
    else if(y <= x && y >= n - steps) y--;
    else if(x <= y && x < steps) x++;
    else if(x >= y && x >= n - steps) x--;
  }
  let row = '';
  for(let i = 0; i < result.length; i++){
    let cells = '';
    for(let j = 0; j < result[i].length; j++) {
      cells += '<th>' + result[i][j] + '</th>';
    }
    row += '<tr>' + cells + '</tr>';
  }
  document.querySelector('body').insertAdjacentHTML('beforeend', '<table>' + row + '</table');
  const el = document.querySelectorAll('th');
  for(let i = 0; i < el.length; i++){
    el[i].style.cssText = "border: 1px solid black; width: 40px; height: 40px";
  }
}

export default fillSpiralMatrix;
