import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck} from "lucide-react";

type VerificationModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const VerificationModal = ({ isOpen, setIsOpen } : VerificationModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-emerald-600 to-green-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <BadgeCheck className="text-white/10 rotate-12 absolute -top-3 -left-8" size="120px"/>
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-green-600 grid place-items-center mx-auto">
                <BadgeCheck />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Verified from Pluschain
              </h3>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <div className="flex gap-2 flex-col items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-green-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
                <p className="text-sm text-white/65">powered by <span className="font-bold">PLUSCHAIN</span></p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VerificationModal