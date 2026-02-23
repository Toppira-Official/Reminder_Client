export interface Me {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
}

export interface UpdateMeInput {
  name?: string;
  phone?: string;
  password?: string;
}
