import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nextjs Starter Template",
  description: "Home page of Nextjs Starter Template",
};

const page = () => {
  return (
    <>
      <section className="grid h-[90dvh] place-items-center">
        <div className="">Nextjs Starter Template</div>
      </section>
    </>
  );
};

export default page;
