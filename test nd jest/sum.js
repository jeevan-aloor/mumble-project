async function getDat(url) {
  let res = await fetch(url);
  let data = await res.json();
}

function sum(a, b) {
  return a - b;
}
module.exports = sum;
s