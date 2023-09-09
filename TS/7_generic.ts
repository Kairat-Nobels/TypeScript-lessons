const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayOfString: Array<string> = ['Hello', 'Kairat']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfString)