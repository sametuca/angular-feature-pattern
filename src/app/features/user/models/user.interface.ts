import { Address } from "cluster";
import { Company } from "./company.interface";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }