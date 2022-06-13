import alster from '../public/assets/images/alster.jpg';
import elbe from '../public/assets/images/elbe.jpg';
import stadtpark from '../public/assets/images/stadtpark.jpeg';

export function useLocationImageUrl(location) {
  if (location.length === 0) {
    return '';
  }

  const urls = {
    alster,
    elbe,
    stadtpark,
  };

  return urls[location];
}
