import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const {user_id}  = request.headers;
     
      if(typeof(user_id) === "string"){
        const list = this.listAllUsersUseCase.execute({user_id});
        return response.status(200).json({list});
      }
      
      
    } catch (error) {
      return response.status(401).json({error: error.message});
    }
  }
}

export { ListAllUsersController };
