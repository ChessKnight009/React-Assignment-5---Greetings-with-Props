// write code for Welcome component here
import React from 'react';

const Welcome = ({name}) => {
    let sayHi = `Hey ! ${name}`;
    let greetMessage = `Greeting new students at Newton School.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};

export default Welcome;
