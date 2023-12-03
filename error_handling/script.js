try {
    // nitish
    throw new Error("this is custom error")
    // throw new ReferenceError("this is custom reference Error")
} catch (error) {
    // console.log(error)
    console.log(error.name)
    console.log(error.message)
    // console.log(error.stack)

}
finally{
    console.log("i am finally i will run in both cases also if error happens in catch i will run")
}