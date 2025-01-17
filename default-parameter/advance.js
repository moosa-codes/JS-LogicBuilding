// Advance Example
function defaultWithFunc(
    greet = "Welcome", // default value
    name = "User", // default name
    func = () => console.log(`\n${greet} , ${name}`) // default function as an argument
) {
    if (greet && name) {
        console.log(`\n${greet} , ${name}`);
    } else {
        func();
    }
}

defaultWithFunc(); // Welcome,User
defaultWithFunc("Hello", "Moosa"); // Hello,Moosa