const index =  function(className) {
    return `export * from './${className}';
export * from './${className}Container';`
};


module.exports = index;