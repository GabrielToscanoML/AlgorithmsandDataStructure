const generateID = () => {
  let s = '';
  for (let index = 0; index < 16; index += 1) {
    if (index > 0 && index%4 === 0) {
      s+='-';
    }
    s += (Math.floor(Math.random() * 20)).toString(36);
  }
  return s;
}

const newID = generateID();
console.log(newID); // Formato de saída: xxxx-aaaa-bbbb-cccc
