export const getQuery = (page = '') => {
    let index = page.split('/');
    index = index[index.length - 1].split('=');
    index = parseInt(index[index.length - 1]);
    return index;
}