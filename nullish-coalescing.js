// tests whether value is undefined or null

function myFunc(param){
    return paramValue = null ?? 'default param'
}

console.log(myFunc())


// using || short circuit for the above would return 'default param' as 0 is falsy

function myFunc2(param){
    return param || 'default param'
}

console.log(myFunc2()) // returns 'default param'
console.log(myFunc2(0)) // returns 'default param'


// non ES2021 nullish coalescing equivalent

function myFunc(param) {
    return param !== null && param !== void 0 ? param : 'default param';
  }