import type { FreePledgeOption, Product } from "../models/product.interface";

export const PRODUCT: Product = {
  image: "/logo-mastercraft.svg",
  title: "Mastercraft Bamboo Monitor Riser",
  subTitle:
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
  amountBacked: 89_914,
  totalBackers: 5_007,
  totalAmount: 100_000,
  daysLeft: 56,
  description:
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
  pledgeOptions: [
    {
      kind: "paid",
      id: "bamboo-stand",
      name: "Bamboo Stand",
      baseAmount: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      unitsLeft: 101,
    },
    {
      kind: "paid",
      id: "black-edition-stand",
      name: "Black Edition Stand",
      baseAmount: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      unitsLeft: 64,
    },
    {
      kind: "paid",
      id: "mahogany-special-edition",
      name: "Mahogany Special Edition",
      baseAmount: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.",
      unitsLeft: 0,
    },
  ],
};

export const FREE_OPTION: FreePledgeOption = {
  kind: "free",
  id: "pledge-free",
  name: "Pledge with no reward",
  description:
    "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
};
