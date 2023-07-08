import Globe from 'globe.gl';

const container = document.getElementById('container');
let globe;

const init = () => {
  const w = container.offsetWidth || window.innerWidth;
  const h = container.offsetHeight || window.innerHeight;

  globe = new Globe(container)
    .globeImageUrl(
      'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg'
    )
    .bumpImageUrl(
      'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png'
    )
    .showGraticules(true)
    .globeResolution(50)
    .graticuleResolution(2)
    .width(w)
    .height(h)
    .backgroundColor('#ffffff')
    .animateIn();
};

const animate = () => {
  requestAnimationFrame(animate);
  globe.render();
};

init();
animate();
