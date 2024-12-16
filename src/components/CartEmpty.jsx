function CartEmpty() {
  return (
    <div>
      <p className="mb-4">Your cart is empty.</p>
      <div className="rounded-md p-3 border border-zinc-200 overflow-hidden shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="pt-4">
              <th className="py-2 text-xs sm:text-base">Product</th>
              <th className="py-2 text-xs sm:text-base">Quantity</th>
              <th className="py-2 text-xs sm:text-base">Price</th>
              <th className="py-2 text-xs sm:text-base">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-xs sm:text-base">&nbsp;</td>
              <td className="py-2">&nbsp;</td>
              <td className="py-2">&nbsp;</td>
              <td className="py-2">&nbsp;</td>
            </tr>
            <tr className="font-bold">
              <td className="w-1/3 py-2 text-xs sm:text-base">Total:</td>
              <td className="w-2/9 py-2 text-xs sm:text-base"></td>
              <td className="w-2/9 py-2 text-xs sm:text-base"></td>
              <td className="w-2/9 py-2 text-xs sm:text-base">$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartEmpty;
