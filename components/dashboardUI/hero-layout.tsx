"use client";
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { useState} from "react";
import { updateHeroData } from "@/app/(protectedRoutes)/_actions/heroSection/updateHeroData";
import toast, { Toaster } from "react-hot-toast";
import {  PencilLine } from "lucide-react";
import { useRouter } from "next/navigation";

export const HeroLayout = ({ heroData } : { heroData : any}) => {
  const [herotitle, setHeroTitle] = useState(heroData[0].title)
  const [heroSubtitle, setHeroSubtitle] = useState(heroData[0].subtitle)
  const [heroDescription, setHeroDescription] = useState(heroData[0].description)
  const [heroButtonOne, setHeroButtonOne] = useState(heroData[0].buttonOne)
  const [heroButtonTwo, setHeroButtonTwo] = useState(heroData[0].buttonTwo)
  const router = useRouter()

  const handleEdit = async (id: string, key: string, updatedText: string) => {
    const { success } = await updateHeroData(id, key, updatedText);
    if (!success) {
      return toast.error(`Failed to update Hero ${key}`);
    }
    toast.success(`Hero ${key} updated successfully`);
    router.refresh();
  }

  
  return (
    <div className="md:min-w-[calc(100vw-220px)] lg:min-w-[calc(100vw-280px)] max-h-[calc(100vh-72px)] border-t border-neutral-700/60 p-8 flex flex-col gap-4 overflow-y-scroll">
      <div>
        <h1 className="text-lg font-semibold md:text-2xl mb-2">Main Heading</h1>
        <Textarea value={herotitle} name="title" onChange={(e) => setHeroTitle(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3 focus:outline-none" />
        <Button onClick={() => handleEdit(heroData[0].id, 'title', herotitle)} className="mt-4 flex gap-1 items-center">
        <PencilLine  size="15px"/>
          Edit</Button>
      </div>

      <div>
        <h2 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Sub Heading</h2>
        <Textarea value={heroSubtitle} name="subtitle" onChange={(e) => setHeroSubtitle(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />  
        <Button onClick={() => handleEdit(heroData[0].id, 'subtitle', heroSubtitle)} className="flex mt-4 items-center gap-1">
          <PencilLine  size="15px"/>
          Edit</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Description</h3>
        <Textarea value={heroDescription} name="description" onChange={(e) => setHeroDescription(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
          <Button className="flex items-center gap-1 mt-4" onClick={() => handleEdit(heroData[0].id, 'description', heroDescription)}>
            <PencilLine size="15px"/>
            Edit
          </Button>
      </div>

      <div>
        <h4 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Button One</h4>
        <Textarea value={heroButtonOne} name="buttonOne" onChange={(e) => setHeroButtonOne(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
        
          <Button className="flex items-center gap-1 mt-4" onClick={() => handleEdit(heroData[0].id, 'buttonOne', heroButtonOne)}>
            <PencilLine size="15px"/>
            Edit
          </Button>
        
      </div>
      <div>
        <h5 className="text-lg font-semibold md:text-2xl mt-4 mb-2">Button Two</h5>
        <Textarea value={heroButtonTwo} name="buttonTwo" onChange={(e) => setHeroButtonTwo(e.target.value)} className="w-full h-24 border border-dashed border-gray-700/60 rounded-lg p-3" />
      
          <Button className="flex items-center gap-1 mt-4" onClick={() => handleEdit(heroData[0].id, 'buttonTwo', heroButtonTwo)}>
          <PencilLine size="15px"/>
            Edit</Button>
        
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}