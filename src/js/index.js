import '../css/style.css';
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

export function sum(a, b) {
    return a + b;
}