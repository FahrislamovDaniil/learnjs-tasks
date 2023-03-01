function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    }
    if (diff < 60 * 1000) {
        return Math.floor(diff / 1000) + ' сек. назад';
    }
    if (diff < 3600 * 1000) {
        return Math.floor(diff / 1000 / 60) + ' мин. назад';
    }

    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear() % 100;
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;

}