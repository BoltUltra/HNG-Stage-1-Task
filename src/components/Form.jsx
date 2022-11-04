const Form = () => {
  const name = "Mayowa Sunusi";
  return (
    <form className="py-10 space-y-4">
      <div className="grid md:grid-cols-2 md:gap-5 md:space-y-0 space-y-4">
        <div className="label">
          <label htmlFor="first_name" className="text-sm">
            First Name
          </label>
          <input
            type="text"
            className="input"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="label">
          <label htmlFor="last_name" className="text-sm">
            Last Name
          </label>
          <input
            type="text"
            className="input"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div className="label">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          className="input"
          name="email"
          id="email"
          placeholder="yourname@email.com"
          required
        />
      </div>
      <div className="label">
        <label htmlFor="email" className="text-sm">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          className="input"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          required
        ></textarea>
      </div>
      <div className="flex items-start space-x-2 md:items-center pb-5">
        <input type="checkbox" name="agree" id="agree" className="" required />
        <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
          You agree to providing your data to {name} who may contact you.
        </label>
      </div>
      <button
        type="submit"
        id="btn__submit"
        className="text-center w-full text-white bg-blue-500 text-sm py-3 rounded-xl"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
