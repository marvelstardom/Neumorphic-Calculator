let outputScreen = document.getElementById("output-screen")

const display = (num) => {
    outputScreen.value += num
}
const Calculate = () => {
    outputScreen.value = eval(outputScreen.value)
}
const Clear = () => {
    outputScreen.value = ""
}
const del = () => {
    outputScreen.value = outputScreen.value.slice(0, -1)
}
