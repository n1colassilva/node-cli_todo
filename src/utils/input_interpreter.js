/**
 * 
 * @param {string} input - Input from user, formatted as command : name (name of a task or file for example)
 * @return {object} - a request object
 * @return {object.command} - user determined command (check, remove, add)
 * @return {object.name} - user determined name of what to manipulate (text.txt, get groceries etc)
 */
function _inputToRequest(input) {
    
    input.split(" : ");

    const request = {
        command: input[0],
        name: input[1],
    };

    return request; 
}


function inputInterpret(input) {
    
    const request = _inputToRequest(input);

    switch (request.command) {
    case "check":
        check(request.name);
        break;
    
    case "uncheck":
        uncheck(request.name);
        break;  
        
        
    case "rmtask":
        rmtask(request.name);
        break;
    
    case "addtask":
        addtask(request.name);
        break;
        
    default:
        break;
    }    
}