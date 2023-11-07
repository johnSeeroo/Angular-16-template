export interface LeadsModel {
  profile: string;
  leadName: string;
  company: string;
  score: string;
  phone: string;
  location: string;
  date: string;
  tags: Array<{}>;
  isSelected?:any;
  name: string
}

export interface LeadsOwner {
   id: number,
   name: string
}

export interface LeadSource{
  id: number,
  name: string
}

export interface MaritalStatus{
  id: number,
  name: string
}

export interface LeadStatus{
  id: number,
  name: string
}

export interface Nationality{
  id: number,
  name: string
}


