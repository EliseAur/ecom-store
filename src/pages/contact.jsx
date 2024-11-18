function Contact() {
  return (
    <div id="main-container" className="container mx-auto">
      <main className="text-center">
        <h1 className="text-3xl">Contact</h1>
        <p>If you have any questions, please fill out the form and contact us</p>
        <form action="">
          <div className="grid grid-cols-2 gap-4">
            <h2>Contact form</h2>
            <input type="text" placeholder="First Name" className="p-2 border border-gray-300" />
            <input type="text" placeholder="Last Name" className="p-2 border border-gray-300" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-300" />
            <input type="text" placeholder="Phone" className="p-2 border border-gray-300" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="p-2 border border-gray-300 w-full"></textarea>
          <button className="bg-blue-600 text-white p-2 w-full">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
