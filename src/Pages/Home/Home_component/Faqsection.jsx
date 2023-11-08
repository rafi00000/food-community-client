const Faqsection = () => {
  return (
    <div className="my-20 primary-bg p-5 space-y-5 rounded-lg">
      <h1 className="text-4xl text-center font-bold">Our Goal</h1>
      <div className="flex item-center justify-between gap-5">
        <div>
        <p className="text-xl text-center">
          At {'"Share Food"'}, we believe in the power of sharing food to bring
          people together and create meaningful connections. Our goal is to
          reduce food waste and fight hunger by facilitating the sharing of
          surplus, fresh, and healthy food among our community members.
        </p>
        </div>
        
        <form>
          <fieldset className="form-control w-80">
            <div className="relative">
            <p>Subscribe to our Newsteller</p>
              <input
                type="text"
                placeholder="Subscribe to our Newsteller"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn primary-bg">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Faqsection;
