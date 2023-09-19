const getJoke = async () => {
    try {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!res.ok) {
            throw new Error('failed to get a joke');
        }
        const joke = await res.json();
        return joke;
    } catch (err) {
        console.error(err);
    }
};

export default getJoke;
