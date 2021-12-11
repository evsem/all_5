//console.log('Hello World')

let array_Numbers = [22, 756, 90, 340, 52, 0, 2, 10]

let array_Objects = [
  { name: 'Alex', age: 25, hasChild: true },
  { name: 'Dora', age: 33, hasChild: true },
  { name: 'Terry', age: 17, hasChild: false },
  { name: 'Farhat', age: 57, hasChild: false },
  { name: 'Saimon', age: 13, hasChild: false },
]

let array_All = [
  238,
  89,
  183,
  90,
  1,
  66,
  { serverName: 'soua', status: true, port: 3000, code: 27639001 },
]

array_Numbers.pop()
array_Numbers.shift()
array_Numbers.push(13, 1)
array_Numbers.unshift('NodeJS')
console.log(array_Numbers)

array_Numbers.splice(0, 1)
console.log(array_Numbers)

let removed = array_Numbers.splice(1, 2, 'Gulp')
console.log(array_Numbers)
console.log(removed)

array_Numbers.unshift(44, 502, 'Hello', 12, 56)
console.log(array_Numbers)

array_Numbers.splice(4, 0, 'Vue')
console.log(array_Numbers)

let array_NumbersCopy = array_Numbers.slice(1, 9)
console.log(array_NumbersCopy)

let resultIncludes = array_Numbers.includes('Vue', 0)
console.log(resultIncludes)
let resultIndexOf = array_Numbers.indexOf(56, 1)
console.log(resultIndexOf)

const resultFind = array_Objects.find((item) => {
  return item.age > 50
})
console.log(resultFind)

let resultFilter = array_Objects.filter((item) => {
  return item.age < 40
})
console.log(resultFilter)

let string_Array = array_Numbers.join('; ')
console.log(string_Array)
