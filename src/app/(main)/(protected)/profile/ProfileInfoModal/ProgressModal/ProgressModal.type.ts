export interface ProgressModalProps {
  progress: {
    logo: string;
    name: string;
    place: string;
  }[];
  exit: () => void;
}
