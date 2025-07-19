console.log("in renderer")

// the renderer file has the access to the versions global  
console.log(versions.chrome())
console.log(versions.node())
console.log(versions.electron())

const func = async () => {
  const response = await window.versions.ping()
  console.log(response)
}

func()
