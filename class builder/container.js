const template =  function(className, templateInitMethod, rootCssClass, parentTemplate) {
    const parent = parentTemplate || 'cl.iControl.Template';
    return `import * as React from 'react';
import { connect } from 'react-redux';
import { ${className} } from './${className}';

@connect(mapStateToProps, mapDispatchToProps)
class ${className}Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ();
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
}

export { ${className}Container  };
`
};

module.exports = template;