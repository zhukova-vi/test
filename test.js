//1я задача:
function turtle(height, speed, rollDown) {
  let road = 0
  let day = true
  let numberOfDays = 0
  while (road < height) {
    if (day) {
      road += speed
      day = false
    }
    else {
      road -= rollDown
      day = true
      numberOfDays++
    }
  }
  return numberOfDays
}

console.log(turtle(100, 50, 30))

//2я задача:
function handshake(n) {
  if (n == 0)
    return 0
  else
    return (n - 1) + handshake(n - 1)
}
console.log(handshake(10))

//3я задача:
const str = "кошка,собака,лошадь,корова,кошка"

function delDuplicate(str) {
  return Array.from(new Set(str.split(","))).join(',')
}

console.log(delDuplicate(str))