let a;
let b;
let calc;
let result;
let show;
let loop= true;
while(loop){
    a=parseInt(prompt('Enter Number 1'));
    b=parseInt(prompt('Enter Number 2'));
    let op=prompt('Enter Operation (+ or - or * or /)');
    switch (op){
        case op= '+' :
            result=confirm(`Do you want to perform operation: ${a}+${b}`)
            calc=a+b;
            show=alert(`Output for given operation ${a}+${b} = ${calc}`)
        break
        case op= '-' :
            result=confirm(`Do you want to perform operation: ${a}-${b}`)
            calc=a-b;
            show=alert(`Output for given operation ${a}-${b} = ${calc}`)
        break
        case op= '*' :
            result=confirm(`Do you want to perform operation: ${a}*${b}`)
            calc=a*b;
            show=alert(`Output for given operation ${a}*${b} = ${calc}`)
        break
        case op= '/' :
            result=confirm(`Do you want to perform operation: ${a}/${b}`)
            calc=a/b;
            show=alert(`Output for given operation ${a}/${b} = ${calc}`)
        break
        default:
            show=alert('Enter proper Operation')
    }
    loop=confirm('Do you want to perform another operation')
}
