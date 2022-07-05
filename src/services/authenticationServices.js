import { usersRepository } from "../repositories/usersRepository.js";

async function checkEmail(req, res){    
    const existingUsers = usersRepository.findUserByEmail(email);
    
    if (existingUsers.rowsCount > 0) {      
        throw {type: "invalidEmail", message: "email already registered!"}
    }
    
   return existingUsers;      
}

const authenticationService = {
    checkEmail
};

export default authenticationService;