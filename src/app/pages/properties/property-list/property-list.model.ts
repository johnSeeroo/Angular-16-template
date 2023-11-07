export interface PropertyModel {
  profile: string;
  name: string;
  company: string;
  score: string;
  phone: string;
  location: string;
  date: string;
  tags: Array<{}>;
  isSelected?: any;
}

export interface PropertyOwner {
  id: number;
  name: string;
}

export interface PropertySource {
  id: number;
  name: string;
}

export interface MaritalStatus {
  id: number;
  name: string;
}

export interface PropertyStatus {
  id: number;
  name: string;
}

export interface Nationality {
  id: number;
  name: string;
}
