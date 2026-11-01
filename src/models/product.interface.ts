export interface Product {
  image: string;
  title: string;
  subTitle: string;
  amountBacked: number;
  totalBackers: number;
  daysLeft: number;
  totalAmount: number;
  description: string;
  pledgeOptions: PaidPledgeOption[];
}

export interface PaidPledgeOption {
  kind: "paid";
  id: string;
  name: string;
  baseAmount: number;
  description: string;
  unitsLeft: number;
}

export interface FreePledgeOption {
  kind: "free";
  id: string;
  name: string;
  description: string;
}

export type PledgeOption = PaidPledgeOption | FreePledgeOption;
