const IMG_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

function getMainImg(id) {
  return `${IMG_BASE_URL}/${id}.svg`;
}

function formatIndexNum(num) {
  if (!num) return;
  return num.toString().padStart(3, "0");
}

export { getMainImg, formatIndexNum };
