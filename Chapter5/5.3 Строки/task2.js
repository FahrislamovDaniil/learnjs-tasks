function checkSpam(str) {
    if (str.toUpperCase().includes('VIAGRA') || str.toUpperCase().includes('XXX')) {
        return true;
    }
    return false;
}