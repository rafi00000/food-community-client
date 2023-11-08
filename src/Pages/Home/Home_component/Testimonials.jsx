
const Testimonials = () => {

    return (
        <div className="my-10">
            <h1 className="text-5xl text-center primary-btn font-bold">Testimonials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <div className="border p-4 rounded-lg">
                <img src="https://i.ibb.co/tJWc3YT/user3-1.jpg" alt="" className="w-52 h-52 mx-auto"/>
                <h2 className="text-2xl text-center">John Tale</h2>
                <p>I cant thank this community enough for the support they have provided me during tough times. The meals I've received have not only filled my stomach but also my heart. A big shoutout to all the generous contributors making this possible.</p>
            </div>
            <div className="border p-4 rounded-lg">
                <img src="https://i.ibb.co/7yZk8sm/user1-1.jpg" alt="" className="w-52 h-52 mx-auto"/>
                <h2 className="text-2xl text-center"> Michael B.</h2>
                <p>This platform has made it incredibly simple to share my surplus food with others in my area. The sense of camaraderie and goodwill here is truly heartwarming. Kudos to the team for fostering such a supportive environment!</p>
            </div>
            <div className="border p-4 rounded-lg">
                <img src="https://i.ibb.co/tJWc3YT/user3-1.jpg" alt="" className="w-52 h-52 mx-auto"/>
                <h2 className="text-2xl text-center">David M.</h2>
                <p>I've been so impressed with the community's commitment to reducing food waste. It's been a pleasure connecting with like-minded individuals who share my passion for sustainability. Keep up the great work!</p>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;