import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'

type EditModalProps = {
  id: string,
  email: string,
  password: string,
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
  onEdit: (id: string, email: string, password: string) => void
}

const EditModal = ({isOpen, email, id, password, setIsOpen, onEdit} : EditModalProps) => {
  const [newEmail, setNewEmail] = useState(email)
  const [newPassword, setNewPassword] = useState(password)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onEdit(id, newEmail, newPassword)
    setIsOpen(false)
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
                    Edit user
                  </h3>
                  <div onClick={() => setIsOpen(false)}>
                    <button className="sr-only">close</button>
                    <X className="cursor-pointer"/>
                  </div>
                </div>
                <Label htmlFor="email" className="mb-2">Email</Label>
                <Input value={newEmail} name="email" type="email" onChange={(e) => setNewEmail(e.target.value)} className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" />
                <Label htmlFor="password" className="mt-4 flex mb-2">Password</Label>
                <Input value={newPassword} name="password" type="password" onChange={(e) => setNewPassword(e.target.value)} className="w-full border border-dashed border-white/50 rounded-lg p-4 focus:outline-none" />
                <div className="flex gap-2 items-center mt-8">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNewEmail("")
                      setNewPassword("")
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
                    Edit
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

export default EditModal