import { AnimatePresence, motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

type DeleteModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title?: string;
  text?: string;
  id: string;
  onDelete: () => void;
}

const DeleteModal = ({ isOpen, setIsOpen, title, text, onDelete } : DeleteModalProps) => {
  const router = useRouter()
  const handleClick = () => {
    onDelete()
    setIsOpen(false)
    router.refresh()
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
            className="bg-gradient-to-br from-rose-600 to-red-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <Trash2 className="text-white/10 rotate-12 absolute z-0 -top-20 -left-24" size="250px" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-rose-600 grid place-items-center mx-auto">
                <Trash2 />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Are you sure?
              </h3>
              {title && <p className="text-center mb-2">
                Title: {title}
              </p> }
              <p className="text-center mb-6">
                Text: {text}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false)
                  }}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={handleClick}
                  className="bg-white hover:opacity-90 transition-opacity text-rose-600 font-semibold w-full py-2 rounded"
                >
                  Delete!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DeleteModal