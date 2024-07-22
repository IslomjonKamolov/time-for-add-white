const hour = document.getElementById('hour')
const minute = document.getElementById("minutes")
const seconds = document.getElementById('seconds')

const timeFun = () => {
    let date = new Date()
    hour.textContent = date.getHours()
    minute.textContent = date.getMinutes()
    if (seconds.textContent < 10 || seconds.textContent == 0) {
        seconds.textContent = '0' + date.getSeconds()
    } else {
        seconds.textContent = date.getSeconds()
    }
}
timeFun()
setInterval(() => {
    timeFun()
}, 0.001)