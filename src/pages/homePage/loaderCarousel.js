async function loaderCarousel() {
  const res = await fetch("http://localhost:4000/games");

  return res.json();
}

export default loaderCarousel;
