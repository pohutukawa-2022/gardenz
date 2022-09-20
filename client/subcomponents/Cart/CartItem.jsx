import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CartItem(props) {
  const { name, quantity, price } = props.cart
  return (
    <section className="flex flex-col justify-around mt-10 w-4/5  mx-auto border shadow-lg rounded-lg p-10">
      <section className="flex flex-col justify-around">
        <section className="font-extrabold text-2xl font-sans text-darkBlue ">
          {name}
        </section>
        <section className="mt-4 font-extrabold font-sans text-darkBlue">
          Price: {price}
        </section>
      </section>
      <div className="flex justify-end ">
        <div className="flex flex-row border -mt-14">
          <button className="text-4xl bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
            -
          </button>
          <p className="flex text-2xl font-bold px-12 pt-2">{quantity}</p>
          <button className="flex text-4xl border-solid bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
            +
          </button>
        </div>
      </div>
      <div className="bg-zinc-400 w-200 border my-10"></div>
      <section className="flex flex-row justify-between mt-10">
        <section className="flex flex-col">
          <p className="font-extrabold">Shipping</p>
          <p className="font-extrabold text-2xl">Total (inc. GST)</p>
        </section>
        <section className="flex flex-col justify-end">
          <p className="font-extrabold">Calculated at checkout</p>
          <p className="font-extrabold text-2xl">{price}</p>
        </section>
      </section>
      <div className="bg-zinc-400 w-200 border my-10"></div>
      <section className="flex flex-row justify-end">
        <button className=" w-52  p-3 text-center rounded-md text-black bg-orange transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300  ">
          <Link to="/garden/:id/shop/delivery/:id">Checkout</Link>
          <Outlet />
        </button>
      </section>
    </section>
  )
}
// vflex rounded-lg shadow-lg mx-72 my-10 justify-center
// function CartItem(props) {
//   const { name, quantity, price } = props.cart
//   return (
//     <>
//       <article className="flex rounded-lg shadow-lg mx-72 my-10 justify-center">
//         <div>
//           <div>
//             <ul>
//               <div>
//                 <li className="flex font-extrabold text-2xl font-sans text-darkBlue ">
//                   {name}
//                 </li>
//                 <div>
//                   <div className="flex float-right ml-72 justify-between border-solid rounded border-2 ">
//                     <button className="text-4xl bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
//                       -
//                     </button>
//                     <p className="flex text-2xl font-bold px-12 pt-2">
//                       {quantity}
//                     </p>
//                     <button className="flex text-4xl border-solid bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 shadow">
//                       +
//                     </button>
//                   </div>
//                 </div>
//                 <li className="flex-row mt-4 font-extrabold font-sans text-darkBlue">
//                   Price: {price}
//                 </li>
//               </div>
//             </ul>
//           </div>
//         </div>
//         <div className="flex my-40">
//           <p className="font-extrabold">Shipping</p>
//           <p className="font-extrabold">Calculated at checkout</p>
//           <p className="font-extrabold ">Total (inc. GST)</p>
//           <p className="font-extrabold">{price}</p>
//         </div>
//         <div className="flex content-end py-64 float-right ">
//           <button className=" w-full p-3 text-center rounded-md text-white bg-orange transition ease-in-out hover:bg-green hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300  ">
//             <Link to="/garden/:id/shop/delivery/:id">Checkout</Link>
//             <Outlet />
//           </button>
//         </div>
//       </article>
//     </>
//   )
// }

export default CartItem
