import InvoiceAddBottom from "../../componnent/InvoiceAddBottom";
import InvoiceAddTop from "../../componnent/InvoiceAddTop";

export default function page() {
    return (
        <main className='pb-14'>
            <div className=''>
                <div>
                    <h3 className='text-2xl text-gray-700 font-semibold'>Invoices</h3>
                    <p className='text-gray-500 text-lg font-normal'>Invoices / New Invoice</p>
                </div>
            </div>
            <InvoiceAddTop />
            <InvoiceAddBottom />
        </main>
    )
}
