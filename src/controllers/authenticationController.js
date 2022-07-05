import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository.js";
import authenticationService from "../services/authenticationServices.js";

export async function singUp(req, res){    
    try {
        const { name, email, password } = req.body; 

        authenticationService.checkEmail(email);
    
        const hashedPassword = bcrypt.hashSync(password, 12);
    
        usersRepository.insertNewUser(name, email, password);
    
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function singIn(req, res){    
  try {
    const { email, password } = req.body;

    const { rows } = usersRepository.findUserByEmail(email);
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET
    );

    res.send({
      token,
    });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}