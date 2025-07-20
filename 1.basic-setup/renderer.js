console.log("in renderer")

// the renderer file has the access to the versions global  
console.log("chrome", window.api.versions.chrome())
console.log(window.api.versions.node())
console.log(window.api.versions.electron())
console.log("electron api", window.api.electronapi)
window.api.electronapi.sendMessage("hello-main", "hi main")

const func = async () => {
  const response = await window.api.versions.ping()
  console.log(response)
}
func()

