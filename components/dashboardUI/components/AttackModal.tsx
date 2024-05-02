import { createAttack } from "@/app/(protectedRoutes)/_actions/attackSection/createAttack";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type AttackModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AttackModal = ({ isOpen, setIsOpen } : AttackModalProps) => {

  const [navtitle, setNavTitle] = useState("");
  const [attack, setAttack] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createAttack({ navtitle: navtitle, description: attack });
    setNavTitle("");
    setAttack("");
    setIsOpen(false);
    toast.success("Attack Card Added Successfully");
    router.refresh();
  }

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
            className="bg-neutral-900 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold mb-2">
                    Card Nav Title
                  </h3>
                  <X className="cursor-pointer" onClick={() => setIsOpen(false)}/>
                </div>
                <Input value={navtitle} name="title" onChange={(e) => setNavTitle(e.target.value)} className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" />
                <h3 className="text-xl font-bold mt-6 mb-2">
                  Attack
                </h3>
                <Textarea value={attack} name="title" onChange={(e) => setAttack(e.target.value)} className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" />
                <div className="flex gap-2 items-center mt-8">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setAttack("");
                      setNavTitle("");
                      setIsOpen(false);
                    }}
                    className="hover:opacity-90 transition-opacity text-white font-semibold w-full py-2 rounded underline"
                  >
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AttackModal