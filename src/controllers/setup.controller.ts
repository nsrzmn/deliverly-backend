
import { SetupService } from "@src/services/setup.service";
import { Request, Response } from "express";

export class SetupController {
  /**
   * @param __service
   */

  public constructor(public __service: SetupService) {}
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

  public streetsByUser = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const response = await this.__service.streetsByUser(Number(userId));

      res.status(200).json({
        statusCode: 200,
        message: "Streets retrieved successfully.",
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
