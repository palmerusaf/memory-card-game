export const importAlphabet = () => {
  const imgDirContext = require.context("../imgs/alpha/", false, /svg$/);
  return imgDirContext.keys().map((imgKey) => ({
    src: imgDirContext(imgKey),
    alt: getAltFrom(imgKey),
  }));

  function getAltFrom(aImgKey) {
    const letterName = aImgKey.replace("./", "").replace(/\.[^/.]+$/, "");
    return `Phoenician Letter ${letterName}`;
  }
};
