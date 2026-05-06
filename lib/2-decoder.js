'use strict';

var decoder = function(encoded){

  // Decoder Step 1.
  let decoded = encoded.split("").reverse().join("");

  // Decoder Step 2.
  decoded = decoded.replaceAll("$", " ");
  
  const replacements = [
    { key: 3, value: "e" },
    { key: 8, value: "g" },
    { key: 1, value: "s" },
    { key: 6, value: "b" },
  ];
  // Decoder Step 3.
  for (let i = 0; i < replacements.length; i++) {
    decoded = decoded.replaceAll(replacements[i].key, replacements[i].value);
  }
  return decoded;
};

module.exports = decoder;

