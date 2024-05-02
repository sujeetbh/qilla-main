import { createFeature } from "@/app/(protectedRoutes)/_actions/featureSection/createFeature";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

type FeatureModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const FeatureModal = ({ isOpen, setIsOpen } : FeatureModalProps) => {
  const [cardHeading, setCardHeading] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Card Heading", cardHeading);
    await createFeature({ title: cardHeading, description: cardDescription });
    setCardHeading("");
    setCardDescription("");
    setIsOpen(false);
    toast.success("Feature Card Added Successfully");
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
                  <Label htmlFor="title" className="text-xl font-bold mb-2">
                    Card Heading
                  </Label>
                  <X className="cursor-pointer" onClick={() => setIsOpen(false)}/>
                </div>
                <Input value={cardHeading} type="text" id="title" name="title" className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" onChange={(e) => setCardHeading(e.target.value)}/>
                {/* {error?.title && <p className="text-destructive text-sm mt-1">{error?.title}</p>} */}
                <Label htmlFor="description" className="text-xl block font-bold mt-6 mb-2">
                  Card Description
                </Label>
                <Textarea value={cardDescription} name="description" id="description" className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" onChange={(e) => setCardDescription(e.target.value)} />
                {/* {error?.description && <p className="text-destructive text-sm mt-1">{error?.description}</p>} */}
                <div className="flex gap-2 items-center mt-8">
                  <button
                    onClick={(e) => { 
                      e.preventDefault();
                      setIsOpen(false)
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

export default FeatureModal

