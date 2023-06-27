export interface GradientButtonProps {
  text: string;
  styles?: string;
}

export interface BankMotiveProps {
  image: string;
  title: string;
  description: string;
}

export interface BankArticleProps {
  image: string;
  owner: string;
  title: string;
  description: string;
}

export interface HeaderProps {
  modalOpened: boolean;
  setModalOpened: (modalOpened: boolean) => void;
}
