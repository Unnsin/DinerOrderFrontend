export default (err) => (res) => {
    if(res.ok) {
        return res
    } else {
        return { message: err }
    }
}