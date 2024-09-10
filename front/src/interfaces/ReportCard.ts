export interface ReportCardProps {
  title: string;
  description: string;
  images: string;
  species: string;
  sex: string;
  location: {
    street: string;
    number: number;
    province: string;
    city: string;
    postalCode: number;
  };
}
