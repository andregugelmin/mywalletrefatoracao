import { financialRepository } from "../repositories/financialRepository.js";
import financialService from "../services/financialService.js";

export async function insertFinancialEvents(req, res){
    try {
      const { value, type } = req.body; 
      const {user} = res.locals;

      financialRepository.insertFinancialEvent(user.id, value, type)
  
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

export async function getFinancialEvents(res, res){
    try {
        const {user} = res.locals;

        const events = financialRepository.getFinancialsEventsByUserId(user.id);

        res.send(events.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getFinancialSum(req, res){    
    const {user} = res.locals;
    const sum = financialService.reduceFinancialSum(user.id);
    res.send({ sum });    
}