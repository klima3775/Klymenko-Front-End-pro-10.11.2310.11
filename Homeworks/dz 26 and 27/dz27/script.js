let codes = {
  6: "Польща",
  38: "Україна",
  1: "США",
};

for (let code in codes) {
  if (codes.hasOwnProperty.call(codes, code)) {
    console.log(`Код ${code}: ${codes[code]}`);
  }
}
