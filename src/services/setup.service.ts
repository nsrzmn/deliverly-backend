import { Street } from "@src/models/street";
import { User } from "../models/user"; 

export class SetupService {
  public seedUser = async (data: any): Promise<any> => {
    const user =  await User.findOne({ where: { email: "testuser@example.com" } });
    if (user) {
      throw new Error("User already exists");
    }

    const newUser = await User.create({
      name: "test user",
      email: "testuser@example.com",
    });

    const userStreets = await Street.findAll({ where: { userId: newUser.id } });
    if (userStreets.length > 0) {
      throw new Error("User created but Streets for this user already exist in our records");
    } 

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

  public streetsByUser = async (userId: number): Promise<Street[]> => {
    const streets = await Street.findAll({ where: { userId } });
    if (streets.length === 0) {
      throw new Error("No streets found for this user");
    } 
    console.log("streets", streets);
    
    return streets;
  };
}
