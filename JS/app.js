
// function getHiddenCard(num, count)
// {
//     let rez = num.slice(-4)
//     let s = '*'.repeat((count && count > 0) ? count : 4)
//     return s + rez
// }

// console.log(getHiddenCard('1234567812345678'));
// // END

// // export default getHiddenCard;
// function filterAnagrams(str, arr)
// {
//     return arr.filter(el => el.split('').sort().join('') === str.split('').sort().join(''));
// }
// filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// // ['aabb', 'bbaa']

// const words = sentence.split(' ');
// const initial = {};
// const result = words.reduce((acc, word) =>
// {
//     acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
//     return acc;
// }, initial);

// console.log(result);


// var
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// console.log('start');
// for (var i = 0; i < 10; i++) {
//     (function (j)
//     {
//         setTimeout(() => console.log(j))
//     })(i)
// }
// console.log('end');

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i));
// }

for (var i = 0; i < 10; i++) {
    setTimeout((function (j)
    {
        return function ()
        {
            console.log(j);
        };
    })(i), 0);
}