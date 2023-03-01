let styles = ['Jazz', 'Blues'];
styles.push('Rock\'n\'roll');
styles[Math.ceil(styles.length / 2) - 1] = 'Classical';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');