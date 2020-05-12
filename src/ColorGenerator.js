export function generator() {
  //this function generate a Hex code using random math
  let colorCode = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  console.log(colorCode);
  return colorCode;
}
