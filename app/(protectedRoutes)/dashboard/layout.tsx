import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    
  )
}