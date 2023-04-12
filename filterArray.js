const array = [ 'a', 10, 'b', 'hola', 122, 15];

function getJustLetters(array) {
  const result = array.filter((element) =>  typeof (element) === 'string' );
  return result;
}

function getJustNumbers(array) {
  const result = array.filter((element) =>  typeof (element) === 'number' );
  return result;
}

function getHighestNumber(array) {
  const arr = getJustNumbers(array); // aqui pego só os numeros do array padrão
  let firtsElement = arr[0];
  for (index = 1; index < arr.length; index += 1) { // começo na posição 1 pois ja tenho a posição 0 na constante acima
    if (arr[index] > firtsElement) {
      firtsElement = arr[index];
    }
  }
  return firtsElement;
}


console.log(getJustLetters(array));
console.log(getJustNumbers(array));
console.log(getHighestNumber(array));
