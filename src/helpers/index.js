function eliminateDuplicates(arr) {
  const len = arr.length;

  const out = [];

  const obj = {};

  for (let i = 0; i < len; i++) {
    obj[arr[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}

export default function generateId(str) {
  const len = str.length;
  const chars = [];
  for (let i = 0; i < len; i++) {
    chars[i] = str[Math.floor(Math.random() * len)];
  }

  const filtered = eliminateDuplicates(chars);

  return filtered.join('');
}
