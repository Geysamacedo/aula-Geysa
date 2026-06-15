
const soma = require ('./soma');
test ('soma de 2 e 3 deve ser igual a 5', () => {
    expect (soma(2,3)) .toBe(5);
});