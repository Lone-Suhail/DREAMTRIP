import dynamic from "next/dynamic";
import InvoiceComponent from "@/components/invoice/Invoice";

export const metadata = {
  title: "Invoice || Dream Trip - Travel & Tour",
  description: "Dream Trip - Travel & Tour",
};

const Invoice = () => {
  return (
    <>
      <InvoiceComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
