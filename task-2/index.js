/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  if(arr2.length != arr1.length){return false}
 	for (let i = 0; i < arr2.length; i++) {
        let element = arr2[i];
      	let found = false;
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[j] === element) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }
    return true;
}

export default haveSameItems;
