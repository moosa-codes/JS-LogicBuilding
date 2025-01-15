/* 
    function to authenticate user 
    and returns whether it is true or false
 */

function authenticateUser(username, password) {
    const admin = 'admin';
    const passkey = '2005';

    if (username !== admin || password !== passkey) {
        console.log("Invalid Credentials");
        return false;
    } else {
        console.log("User in");
        return true;
    }
}

authenticateUser('moosa', '232'); // invalid credentials 

authenticateUser('admin', '2005'); // true user in