import SortByPanel from "../SortByPanel";

const CategorySegment = () => {
  console.log("This is only for github testing");
  return (
    <>
      <section className=" bg-bgLightBlue h-90vh px-10vw py-5vh">
        <SortByPanel />
        <div id="container" className=" ">
          <h1 className=" text-primaryBlue text-3xl font-bold w-50%">
            WE HAVE SOMETHING FOR EVERYONE
          </h1>
        </div>
      </section>
    </>
  );
};

export default CategorySegment;
