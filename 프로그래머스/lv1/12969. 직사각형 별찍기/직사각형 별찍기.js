process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]);
    drawRectangle(a, b);
});

function drawRectangle(n, m) {
  for (let i = 0; i < m; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '*';
    }
    console.log(row);
  }
}