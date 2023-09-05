import PageHeader from "@/components/manageResource/PageHeader";
import ResourceAvailabilityContainer from "@/components/manageResource/ResourceAvailability/ResourceAvailabilityContainer";
import ResourceMainInfo from "@/components/manageResource/ResourceInfo/ResourceMainInfo";
import ResourceType from "@/components/manageResource/ResourceInfo/ResourceType";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-full h-full md:h-4/5 md:w-4/5 flex-col gap-9">
        <PageHeader />
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="flex flex-col gap-4 w-full">
            <ResourceMainInfo />
            <ResourceType />
          </div>
          <ResourceAvailabilityContainer />
        </div>
      </div>
    </div>
  );
}
