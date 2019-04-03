const number = document.querySelector('.number')
const dot = document.querySelector('.dot')
const second = document.querySelector('.second')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const length = 12
const dotLength = 60

for(let i = 0; i < length; i ++) {
  let oNumber = document.createElement('DIV')
  let span = document.createElement('SPAN')
  span.innerHTML = i + 1
  oNumber.appendChild(span)
  oNumber.style.transform = `rotate(${(i + 1)*30}deg)`
  span.style.transform = `rotate(${(i + 1)*(-30)}deg)`
  span.style.display = 'block'
  oNumber.classList.add('clock-number')
  number.appendChild(oNumber)
}

for (let i = 0; i < dotLength; i++) {
  if (i >0 && i % 5 !== 0) {
    const sdot = document.createElement('DIV')
    sdot.style.transform = `rotate(${i*6}deg)`
    sdot.classList.add('sdot')
    dot.appendChild(sdot)
  }
}

function clockMove () {
  const nowTime=new Date();
  const nowHour=nowTime.getHours();
  const nowMinute=nowTime.getMinutes();
  const nowSecond=nowTime.getSeconds();

  const hourDeg = nowHour*30 + (nowMinute/60)*30
  const minuteDeg = nowMinute*6 + (nowSecond/60)*6

  hour.style.transform = `rotate(${hourDeg}deg)`
  minute.style.transform = `rotate(${minuteDeg}deg)`
  second.style.transform = `rotate(${nowSecond*6}deg)`
}

clockMove()
setInterval(clockMove, 1000)
