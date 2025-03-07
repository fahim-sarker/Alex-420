import MostSelling from "@/Components/CustomComponents/MostSelling";
import TotalRevenue from "@/Components/CustomComponents/TotalRevenue";
import UnderSelling from "@/Components/CustomComponents/UnderSelling";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BarStatistics = () => {
  return (
    <section className="bg-[#F8F8FF] pt-12 px-10 pb-16 h-[110%]">
      <Tabs defaultValue="mostSelling" className="">
        <TabsList className="grid grid-cols-4 gap-[30px] w-full">
          <TabsTrigger value="mostSelling">Most Selling</TabsTrigger>
          <TabsTrigger value="underSelling">Under Selling</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="totalCost">Total Cost</TabsTrigger>
        </TabsList>
        <TabsContent value="mostSelling">
          <MostSelling />
        </TabsContent>
        <TabsContent value="underSelling">
          <UnderSelling />
        </TabsContent>
        <TabsContent value="revenue">
          <TotalRevenue />
        </TabsContent>
        <TabsContent value="totalCost">totalCost</TabsContent>
      </Tabs>
    </section>
  );
};

export default BarStatistics;
