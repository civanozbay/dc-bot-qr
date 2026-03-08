import QRCode from "qrcode";

// QRCode.toDataURL("pony")
//   .then((url) => {
//     console.log(url);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const generateQR = async (text) => {
  try {
    const buffer = await QRCode.toBuffer(text);
    return buffer;
  } catch (err) {
    console.error(err);
  }
};

export default generateQR;
