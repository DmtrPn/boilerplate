import React from 'react';

import * as style from './about.scss';

export function About() {
    return (
        <div className={style.about}>
            <h1 className="mdc-typography--display1">Библиотека JavaScript-разработчика</h1>
            <p className="mdc-typography--body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perspiciatis dolores mollitia non aut eius dolorem alias, accusantium qui enim amet molestias doloremque voluptates aspernatur iure quidem illo repellat ducimus.</p>
        </div>
    );
}
