
//dom
const dom = {
    root : document.getElementById('root'),
    btn : document.getElementById('btn'),
};
export default dom;


// APIs
const getJoke = async () => {
    
try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any')
    if(!res.ok){
        throw new Error('failed to get a joke');
    }
    const joke = await res.json();
    return joke;
} catch (err) {
    console.error(err);
}
};
      
getJoke();
// component
 
const createJoke = (jokeText) => {

    // container 

    const container = document.createElement('div');
    container.id = 'jokeContainer';
    container.className = 'joke-container';

    //category

    const category = document.createElement('h2');
    category.innerText = jokeText.category;

    // type 
    const jokeType = document.createElement('h2');
    jokeType.innerHTML= jokeText.jokeType;


    // joke text

    const setup = document.createElement('p');
    setup.innerText= jokeText.setup;
 
     //delivery

     const delivery = document.createElement('p');
     delivery.innerText = jokeText.delivery;

 
    //  append

container.append(category, jokeType, setup, delivery);
return container;

};

//handler
const getJokeHandler = async() => {
    
    const jokeText = await getJoke();

    const jokeDom = createJoke(jokeText);
    dom.root.innerHTML = '';
    dom.root.append(jokeDom);
    
};


// listeners

dom.btn.addEventListener('click', getJokeHandler)