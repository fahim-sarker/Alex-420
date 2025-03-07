import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Bar Name",
    id: "barName",
  },
  {
    title: "Email",
    id: "email",
  },
  {
    title: "Address",
    id: "address",
  },
  {
    title: "Password",
    id: "password",
  },
];

export default function ProfileDetails() {
  const [formData, setFormData] = useState({
    profileImage: null,
    profileImageUrl: "https://i.ibb.co.com/XkYLH2xR/avatar.png",
    barName: "Johan Rathi",
    email: "abcd@gmail.com",
    address: "asdfgh",
    password: "••••••••••",
  });

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        profileImage: file,
        profileImageUrl: imageUrl,
      }));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".gif"] },
    maxFiles: 1,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    console.log("Changes saved successfully!");
  };

  return (
    <section className="pt-12 px-10 font-poppins">
      <h2 className="text-xl font-semibold mb-12">Update Profile</h2>
      <div className="w-full ">
        <form onSubmit={handleSubmit}>
          <div className="mx-auto w-fit mb-12 relative">
            <div {...getRootProps()} className="relative cursor-pointer group">
              <input {...getInputProps()} />
              <div className="size-[220px] rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100 relative">
                <img
                  src={formData.profileImageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Pencil className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute right-2 bottom-2 bg-[#D9D9D9] size-12 rounded-full flex justify-center items-center pointer-events-none">
              <EditIcon className="size-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <div key={idx}>
                <Label
                  htmlFor={item.id}
                  className="block mb-2 font-medium text-[#353B48] md:text-base"
                >
                  {item?.title}
                </Label>
                <div className="relative">
                  <Input
                    id={item.id}
                    className="w-full h-[56px] bg-white"
                    value={formData[item.id]}
                    onChange={(e) => updateFormData(item.id, e.target.value)}
                    disabled={item.id === "email"}
                  />
                  <div className=" absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
                    <EditIcon className={`size-6 ${item.id === "email" && "fill-gray-400"}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button
              type="submit"
              className="bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] text-lg font-medium text-black w-full sm:w-auto px-6 py-4 leading-none rounded-md hover:shadow-xl cursor-pointer"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
