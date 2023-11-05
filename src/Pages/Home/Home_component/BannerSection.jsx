import { motion } from "framer-motion"


const BannerSection = () => {

    return (
        <motion.div className="shadow-xl border p-5 bg-gradient-to-bl from-green-400 to-emerald-500 min-h-screen flex items-center rounded-lg my-10" initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: [0, 1], scale: [0.5, 1] }}
        transition={{ duration: 0.3 }}>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white">
          Join the Community <br /> Share the Flavors of <br /> <span className="text-yellow-300 underline">
            Goodness!
            </span>
        </h2>
      </div>

      <div>
        <motion.img
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        src="https://i.ibb.co/FYVx2DX/logo.png" alt="" draggable={false} className=""/> 
      </div>
    </motion.div>
    );
};

export default BannerSection;