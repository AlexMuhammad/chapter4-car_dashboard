const createAlert = document.querySelector("#createAlert")
const updateAlert = document.querySelector("#updateAlert");
const deleteAlert = document.querySelector("#deleteAlert");

if (createAlert) {
    setTimeout(() => {
        document.querySelector("#createAlert").remove()
    }, 2000)
}
if (updateAlert) {
    setTimeout(() => {
        document.querySelector("#updateAlert").remove()
    }, 2000)
}
if (deleteAlert) {
    setTimeout(() => {
        document.querySelector("#deleteAlert").remove()
    }, 2000)
}