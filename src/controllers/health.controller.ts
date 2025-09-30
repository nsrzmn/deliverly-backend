import { CheckHealthService } from "@src/services/health.service";
import { Request, Response } from "express";

export class HealthController {
  /**
   * @param __service
   */

  public constructor(public __service: CheckHealthService) {}
  /**
   *
   * @param req
   * @param res
   * @param next
   */

  public checkHealth = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      let message = "health check executed.";
      const data: any = await this.__service.checkHealth(body);

      res.status(200).json({
        statusCode: 200,
        message,
        data,
      });
    } catch (error: any) {
      res.status(403).send({
        statusCode: 403,
        message: error.message,
      });
    }
  };
}
