module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.join('').replace(/,/g, '');
    let stack = [];

    for (let symbol of str) {
        let index = brackets.indexOf(symbol);

        if (index % 2 === 0) {
            
            if (symbol === brackets[index + 1] && stack[stack.length - 1] === index) {
                stack.pop();
            } else if (symbol === brackets[index + 1] && stack[stack.length - 1] !== index) {
                stack.push(index);
            }
            else {
                stack.push(index);
            }
        } 
        else {
            if (stack.pop() !== index-1) {
                return false;
            }
        }
            
    }
    
    return stack.length === 0;
}
