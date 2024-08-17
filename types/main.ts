type Avatar = {
  public_id: string;
  url: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  avatar?: Avatar;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
};
