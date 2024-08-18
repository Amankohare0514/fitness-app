import React, { createContext, useState, ReactNode, useContext } from "react";

interface UserContextType {
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
  
  setAge: (age: number) => void;
  setWeightKg: (weightKg: number) => void;
  setWeightLb: (weightLb: number) => void;
  setHeightCm: (heightCm: number) => void;
  setHeightFeet: (heightFeet: number) => void;
  setGender: (gender: "Male" | "Female") => void;
  setActivityLevel: (activityLevel: "Sedentary" | "Lightly active" | "Moderately active" | "Very active" | "Super active") => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [age, setAge] = useState(0);
  const [weightKg, setWeightKg] = useState(0);
  const [weightLb, setWeightLb] = useState(0);
  const [heightCm, setHeightCm] = useState(0);
  const [heightFeet, setHeightFeet] = useState(0);
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [activityLevel, setActivityLevel] = useState<"Sedentary" | "Lightly active" | "Moderately active" | "Very active" | "Super active">("Lightly active");

  return (
    <UserContext.Provider value={{ age, setAge, weightKg, weightLb, setWeightKg, setWeightLb, heightCm, heightFeet, setHeightCm, setHeightFeet, gender, setGender, activityLevel, setActivityLevel }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};