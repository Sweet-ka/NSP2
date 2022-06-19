export const alph = () => {
    let str = ''
    for(let i = 10; i < 36; i++){
        str += i.toString(36);
    };
    for(let i = 0; i <= 9; i++){
        str += i;
    }
    return str;
}

export const passLength = 8;
