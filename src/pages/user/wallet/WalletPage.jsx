import React from "react";
import Header from "../../../components/user/Header/Header";
import { Wallet } from "../../../components/user/Wallet/Wallet";
import Footer from "../../../components/user/footer/Footer";

export default function WalletPage() {
  return (
    <>
      <div className="max-h-screen">
        <Header />
        <Wallet />
      </div>
    </>
  );
}
