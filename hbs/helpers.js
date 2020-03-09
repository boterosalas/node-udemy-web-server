const hbs = require('hbs')

hbs.registerHelper('getAnio',()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('capitalize',(x)=>{
  let words = x.split(' ')
  words.forEach((word,idx)=>{
    words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  });
  return words.join(" ")
})