import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nextjs Starter Template",
  description: "Hpme page of Nextjs Starter Template",
};

const page = () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <div className="">Nextjs Starter Template</div>
      </div>
    </>
  );
};

export default page;
