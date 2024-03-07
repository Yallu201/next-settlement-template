const base64ToFile = (base64Image, fileName) => {
  const arr = base64Image.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const buffer = Buffer.from(arr[1], 'base64');
  let n = buffer.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = buffer.readInt8(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

export default base64ToFile;
