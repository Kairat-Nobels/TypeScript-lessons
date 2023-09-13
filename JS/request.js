// get try catch fetch
const btn = document.getElementById('btn');
const btn2 = document.getElementById('axget');
const btnPost = document.getElementById('postBtn');

const getPosts = async () =>
{
    try {
        const res = await fetch('https://dummyjson.com/users')
        if (!res.ok) throw new Error('error')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err.message);
    }
}

btn.onclick = () => getPosts()

// get axios

const getUsers = async () =>
{
    try {
        const { data } = await axios.get('https://dummyjson.com/users')
        console.log(data);
    }
    catch (err) {
        console.log(err.message)
    }
}
btn2.onclick = () => getUsers()

// post axios
const postUserAxios = async () =>
{
    try {
        const { data } = await axios.post('https://dummyjson.com/users/add',
            {
                firstName: 'Kairat',
                lastName: 'Zholoi uulu',
                age: 21,
            }
        )
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

btnPost.onclick = () => postUserAxios()

// post fetch
// const 
const postUserFetch = async () =>
{
    try {
        const res = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: 'Muhammad',
                lastName: 'Ovi',
                age: 250
            })
        })
        if (!res.ok) {
            throw new Error('error')
        }
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}