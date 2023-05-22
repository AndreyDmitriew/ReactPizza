export interface ButtonInterface {
  id: string;
  name: string;
  status: string;
}

export interface Args {
  price?: number;
  name?: string;
  type: string;
  isActive?: boolean;
  id?: string;
  handleChangeActiveButton?: () => void;
}
