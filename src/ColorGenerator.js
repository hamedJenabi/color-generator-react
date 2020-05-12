export function generator() {
  let colorCode = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  console.log(colorCode);
  return colorCode;
}
