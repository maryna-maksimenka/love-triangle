module.exports = function getLoveTrianglesCount(preferences = []) { 
  let count = 0; 
  for (let i = 0, length = preferences.length; i < length; i++) { 
    let first = preferences[i]; 
    let second = preferences[first-1]; 
    let third = preferences[second-1]; 
    if (third == i + 1 && third != first) { 
      count++; 
    } else continue; 
  } 
  return Math.floor(count / 3); 
}