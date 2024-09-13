function tri (numbers,order) {

    if (order === "asc") {
        return numbers.sort((dataA, dataB) => dataA - dataB); // Tri ascendant
    } else if (order === "desc") {
        return numbers.sort((dataA, dataB) => dataB - dataA); // Tri descendant
    } else {
        throw new Error("L'ordre doit être 'asc' ou 'desc'");
    }

}

    const numbers = [5, 2, 8, 1, 9, 6, 4, 7, 3];
    console.log(tri(numbers, 'asc')); // [1, 2, 3, 4, 5, 6, 7, 8, 9]   
    console.log(tri(numbers, 'desc')); // [9, 8, 7, 6, 5, 4, 3, 2, 1]  

