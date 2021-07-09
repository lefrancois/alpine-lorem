// src/index.js
function src_default(Alpine) {
  Alpine.directive("lorem", (el, {expression}) => {
    const dict = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];
    let paragraphs = 1;
    let words = 100;
    if (expression) {
      const parts = expression.split(",");
      paragraphs = parts[0];
      words = parts[1];
    }
    const punct = "..,,,,,!?";
    let lorem = "";
    for (var i = 0; i < paragraphs; i++) {
      let collectWords = [];
      for (var k = 0; k < words; k++) {
        collectWords.push(dict[Math.floor(Math.random() * dict.length)]);
      }
      let index = Math.floor(Math.random() * 10 + 1);
      let selectedPunct = ",";
      while (index < collectWords.length - 1) {
        selectedPunct = punct.charAt(Math.floor(Math.random() * punct.length));
        collectWords[index] += selectedPunct;
        if ([".", "!", "?"].includes(selectedPunct)) {
          collectWords[index + 1] = collectWords[index + 1].charAt(0).toUpperCase() + collectWords[index + 1].slice(1);
        }
        index += Math.floor(Math.random() * 10 + 2);
      }
      collectWords[collectWords.length - 1] += ".";
      collectWords[0] = collectWords[0].charAt(0).toUpperCase() + collectWords[0].slice(1);
      lorem = lorem + "<p>" + collectWords.join(" ") + "</p>";
    }
    el.innerHTML = lorem;
  });
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
