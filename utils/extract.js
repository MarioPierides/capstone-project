export function getAgeGroup(ageGroup) {
  return ageGroup
    .filter(ageElement => ageElement.checked)
    .map(ageElement => ageElement.dataset.displayname);
}
