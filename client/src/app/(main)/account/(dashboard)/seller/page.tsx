import SellerTemplate from "@modules/account/templates/seller-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seller",
  description: "Vende tus productos ",
}

export default function Profile() {
  return <SellerTemplate />
}
