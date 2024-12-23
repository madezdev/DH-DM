export interface Account {
  id: number;
  user_id: number;
  cvu: string;
  alias: string;
  available_amount: number;
}

export interface AccountData {
  cvu: string;
  alias: string;
}