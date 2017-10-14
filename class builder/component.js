const component =  function(className) {

    return `import React from 'react';

import './${className}.scss';

export function ${className}() {
    return (
    );
}
`
};

module.exports = component;