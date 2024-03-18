export interface SignInViewModelProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
}