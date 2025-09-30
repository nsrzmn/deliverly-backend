import { Street } from "@src/models/street";
import { User } from "../models/user"; 

export class UserService {
  public seedUser = async (data: any): Promise<any> => {
    const newUser = await User.create({
      name: "test user",
      email: "testuser@example.com",
    });

    const street = ["street 1", "street 2", "street 3"];
    for (let i = 0; i < street.length; i++) {
      await Street.create({
        name: street[i],
        sequence: (i + 1),
        userId: newUser.id,
      });
    }
    return newUser;
  };
}
