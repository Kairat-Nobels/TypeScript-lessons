// базовые типы
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript!';
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// дженерик тип
var numberArray2 = [1, 2, 3, 4, 5, 6, 7];
var words = ['Hello', 'World', 'TypeScript'];
// Tuple
var contact = ['Kairat', 502551118];
// Any
var variable = 42;
variable = 'New Sring';
variable = [];
// : void озанчает что функция нам ничего не вернёт
function sayMyName(name) {
    console.log(name);
}
sayMyName('Кайрат лох');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
// const id3: ID = true
