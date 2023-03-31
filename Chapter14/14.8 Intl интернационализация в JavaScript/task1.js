function collatorSort(animals) {
    let collator = new Intl.Collator();
    animals.sort((a, b) => collator.compare(a, b));
    return animals;
}