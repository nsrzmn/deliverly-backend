import { User } from "../models/user"; 

export class UserService {
  public seedUser = async (data: any): Promise<any> => {
    const newUser = await User.create({
      name: "test user",
      email: "testuser@example.com",
    });
    return newUser;
  };
}
