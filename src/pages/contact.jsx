function Contact() {
  return (
    // <div id="main-container" className="container mx-auto">
    //   <main className="text-center">
    //     <h1 className="text-3xl">Contact</h1>
    //     <p>If you have any questions, please fill out the form and contact us</p>
    //     <form action="">
    //       <div className="grid grid-cols-2 gap-4">
    //         <h2>Contact form</h2>
    //         <input type="text" placeholder="First Name" className="p-2 border border-gray-300" />
    //         <input type="text" placeholder="Last Name" className="p-2 border border-gray-300" />
    //         <input type="email" placeholder="Email" className="p-2 border border-gray-300" />
    //         <input type="text" placeholder="Phone" className="p-2 border border-gray-300" />
    //       </div>
    //       <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="p-2 border border-gray-300 w-full"></textarea>
    //       <button className="bg-blue-600 text-white p-2 w-full">Submit</button>
    //     </form>
    //   </main>
    // </div>
    <div id="main-container" className="container mx-auto p-4">
      <main className="text-center">
        <h1 className="text-3xl mb-4">Contact</h1>
        <p className="mb-6">If you have any questions, please fill out the form and contact us</p>
        <form action="" className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Phone" className="p-2 border border-gray-300 rounded" />
          </div>
          <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="p-2 border border-gray-300 rounded w-full mb-4"></textarea>
          <button className="bg-blue-600 text-white p-2 w-full rounded">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
