import { v4 as uuidV4 } from "uuid";

interface IUserCreate {
  name: string;
  admin?: boolean;
  email: string;
}

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date | undefined;

  constructor({ name, email, admin }: IUserCreate) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = null;
    if (admin) {
      this.admin = true;
    }

  }
}

export { User };
