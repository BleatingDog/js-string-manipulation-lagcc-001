'use strict';

var encoder = function(phrase){
  const replacements = [
  { key: "e", value: 3 },
  { key: "g", value: 8 },
  { key: "s", value: 1 },
  { key: "b", value: 6 },
  ];

  let encoded = phrase;
  // Encoder Step 1.
  for (let i = 0; i < replacements.length; i++) {
    encoded = encoded.replaceAll(replacements[i].key, replacements[i].value);
  };

  // Encoder Step 2.
  encoded = encoded.replaceAll(" ", "$");

  // Encoder Step 3.
  return encoded.split("").reverse().join("");
}

module.exports = encoder;
