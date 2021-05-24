import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {

    try{
      const user_id = request.params.user_id;
    console.log(user_id)
      const user = this.turnUserAdminUseCase.execute({user_id});

     return response.status(201).json({user});
    }catch(err){
      return response.status(401).json({error: err.message});
    }
   
  }
}

export { TurnUserAdminController };
