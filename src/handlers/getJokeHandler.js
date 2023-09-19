import dom from '../dom.js';
import createJoke from '../components/createJoke.js';
import getJoke from '../../apis/getJoke.js';

const getJokeHandler = async () => {
    const jokeText = await getJoke();

    const jokeDom = createJoke(jokeText);
    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
};

export default getJokeHandler;
