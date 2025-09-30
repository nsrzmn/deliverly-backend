
import { UserService } from "@src/services/user.service";
import { Request, Response } from "express";

export class UserController {
  /**
   * @param __service
   */

  public constructor(public __service: UserService) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public User = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "User created successfully.";
      const response: any = await this.__service.seedUser(body);

      res.status(200).json({
        statusCode: 200,
        message,
        response,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };
}
