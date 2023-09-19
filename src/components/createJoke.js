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
    jokeType.className = 'type';
    jokeType.innerText =
        jokeText.type === 'twopart' ? 'Two-Part Joke' : 'One-part Joke';

    // joke text

    const setup = document.createElement('p');
    setup.className = 'setup';
    setup.innerText = jokeText.setup;
    container.append(setup);

    //delivery, joke is two part
     if (jokeText.type === 'twopart'){
      const delivery = document.createElement('p');
      delivery.className = 'second-part';
      delivery.innerText = jokeText.delivery;
      container.append(setup, delivery);

     } else{
      setup.innerText = jokeText.joke;
     }

    

    // flags
    const flags = document.createElement('ul');
    flags.className = 'flagsList';
    flags.id = 'flags';

    for (const [key, value] of Object.entries(jokeText.flags)) {
        const flagType = document.createElement('li');
        flagType.innerText = key + ':' + value;
        flags.appendChild(flagType);
    }

    //  append

    container.append(category, jokeType, flags);
    return container;
};

export default createJoke;
