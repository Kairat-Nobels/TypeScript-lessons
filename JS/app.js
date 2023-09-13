
function getHiddenCard(num, count)
{
    let rez = num.slice(-4)
    let s = '*'.repeat((count && count > 0) ? count : 4)
    return s + rez
}

console.log(getHiddenCard('1234567812345678'));
// END

// export default getHiddenCard;
function filterAnagrams(str, arr)
{
    return arr.filter(el => el.split('').sort().join('') === str.split('').sort().join(''));
}
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']