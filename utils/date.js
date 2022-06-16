export function minDate() {
  const date = new Date();
  const dd = `${date.getDate()}`.padStart(2, '0');
  const mm = `${date.getMonth() + 1}`.padStart(2, '0');
  const yyyy = date.getFullYear();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = '00';
  const mill = '00';

  return `${yyyy}-${mm}-${dd}T${hours}:${min}:${sec}.${mill}`;
}

export const today = minDate();
