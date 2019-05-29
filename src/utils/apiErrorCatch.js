export default (err) => (res) => {
    if(res.ok) {
        return res.json()
    } else {
        return { message: err }
    }
}