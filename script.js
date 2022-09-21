function add(a, b) {
    console.log(a + b);
}
function prod(a, b) {
    console.log(a * b);
}
function calculator(val1, val2, operation) {
    operation(val1, val2);
}

calculator(5, 12, prod);
calculator(5, 12, add);
