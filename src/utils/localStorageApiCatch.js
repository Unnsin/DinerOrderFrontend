export default (item) => (res) => {
    localStorage.setItem(item, res[item]);
    return res;
}  