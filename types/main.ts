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
  age: number;
  weightKg: number;
  weightLb: number;
  heightCm: number;
  heightFeet: number;
  gender: "Male" | "Female";
  activityLevel:
    | "Sedentary"
    | "Lightly active"
    | "Moderately active"
    | "Very active"
    | "Super active";
};
