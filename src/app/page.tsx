import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Navbar/>
      <h2>main routes</h2>
    </div>
  );
}
