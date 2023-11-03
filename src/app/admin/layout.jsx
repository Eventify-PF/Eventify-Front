import AdminFooter from "@/components/AdminLayout/AdminFooter";
import AdminHeader from "@/components/AdminLayout/AdminHeader";
import AdminSidebar from "@/components/AdminLayout/AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div>
        
        <div className="flex overflow-hidden  pt-16">
          <AdminSidebar/>
          <main className="h-full w-full relative overflow-y-auto lg:ml-64 bg-gray-300 min-h-screen pb-20 pt-28">
              {children}
             
          </main>
        </div>
      </div>
    );
  };

export default AdminLayout
