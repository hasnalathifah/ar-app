import { useEffect } from 'react';

const ARComponent: React.FC = () => {
  useEffect(() => {
    // Tambahkan kode A-Frame dan AR.js di sini
    const scene = document.createElement('a-scene');
    scene.setAttribute('location-based', '');
    document.body.appendChild(scene);

    const marker = document.createElement('a-marker');
    marker.setAttribute('preset', 'hiro');
    marker.setAttribute('gps-entity-place', {
      latitude: 37.774929,
      longitude: -122.419416,
    });
    scene.appendChild(marker);

    const box = document.createElement('a-box');
    box.setAttribute('position', '0 0.5 0');
    box.setAttribute('material', 'color: red');
    marker.appendChild(box);
  }, []);

  return <></>; // Komponen React tidak memerlukan rendering
};

export default ARComponent;
