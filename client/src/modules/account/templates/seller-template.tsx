"use client"

import React, { useEffect, useState } from "react"
import { actionGetSellerApplication } from "../actions/action-seller-application"
import { useAccount } from "@lib/context/account-context"
import ApplyForSeller from "../components/dashboard-gf/seller/apply-for-seller"
import { getStore } from "../actions/get-seller-store"
import SellerStore from "../components/dashboard-gf/seller/seller-store"
import Spinner from "@modules/common/icons/spinner"

interface SellerRole {
  application: boolean
  approved: boolean
  rejected: boolean
}
const SupplierTemplate: React.FC = () => {
  const { customer } = useAccount()
  const [isloading, setIsloading] = useState<boolean>(true)
  const [isSeller, setIsSeller] = useState<SellerRole>()
  const [store, setStore] = useState()
  const [reset, useReset] = useState(false)

  useEffect(() => {
    const functiongetData = async () => {
      if (customer!) {
        const dataSellerApplication = await actionGetSellerApplication(
          customer.id
        ).then((data) => {
          setIsSeller(data)
          setIsloading(false)
          return data
        })
        if (dataSellerApplication?.approved) {
          const dataStore = await getStore()
          setStore(dataStore)
        }
      }
    }
    functiongetData()
  }, [reset])

  const handlerReset = () => {
    useReset(!reset)
  }

  return isloading ? (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner size="32" />
    </div>
  ) : !isSeller?.application && customer ? (
    <>
      <ApplyForSeller customer_id={customer.id} handlerReset={handlerReset} />
    </>
  ) : !isSeller?.approved ? (
    !isSeller?.rejected ? (
      <h1 className="text-[48px]"> Su solicitud esta en proceso </h1>
    ) : (
      <h1 className="text-[48px]"> Su solicitud fue rechazada </h1>
    )
  ) : store ? (
    <SellerStore store={store} />
  ) : (
    <div>No eres vendedor</div>
  )
}

export default SupplierTemplate
