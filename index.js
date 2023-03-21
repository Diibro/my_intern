
const parentFunction = (num =1 ) =>{
     if(num <= 10){
          console.log(num)
          num++
          parentFunction(num)
     }
}

const fiboFunction = (num, array = [0, 1]) =>{
     while(num > 2){
          const [nextToLast, last] = array.slice(-2)
          array.push(nextToLast + last)
          num -= 1;
     }
     return array
}

//console.log(fiboFunction(12))

const fibo = (num, array = [0,1]) => {
     if(num <= 2) return array;
     const [nextTo, Last] = array.slice(-2)
     return fibo(num -1, [...array, nextTo + Last])
}

console.log(fibo(2))