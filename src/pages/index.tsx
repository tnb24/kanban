import { type NextPage } from "next";
import Head from "next/head";
import Card from "~/components/card";

const Home: NextPage = () => {  
  return (
    <>
      <Head>
        <title>Kanban Board</title>
        <meta name="description" content="kanban board built with ts + next + tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col font-inter">
        <div className="mx-10 my-10">
          <h1 className="text-3xl font-bold">Kanban Board</h1>
          <p className="text-sm text-gray-600">
            A board to track your progress.
          </p>
        </div>
        <div className="mx-8 flex flex-row rounded-md bg-slate-50">
          <div className="mx-2 my-2 flex-auto flex-col">
            <button
              disabled
              className="ml-2 items-center rounded-full bg-[#E1E4E8]"
            >
              <h1 className="px-2 py-1 font-semibold text-gray-700">
                Last week
              </h1>
            </button>
            <Card
              title="Review scope"
              description="Description"
              tag="Due 4/11"
              color="bg-red-300"
            />
            <Card
              title="Team meeting"
              description="Description"
              tag="Due 4/9"
              color="bg-red-300"
            />
          </div>
          <div className="mx-2 my-2 flex-auto flex-col">
            <button
              disabled
              className="ml-2 items-center rounded-full bg-[#F0E7F6]"
            >
              <h1 className="px-2 py-1 font-semibold text-gray-700">
                This week
              </h1>
            </button>
            <Card
              title="Usability test"
              description="Description"
              tag="Research"
              color="bg-[#CBDFD8]"
            />
             <Card
              title="New strategies"
              description="Description"
              tag="Research"
              color="bg-[#CBDFD8]"
            />
          </div>
          <div className="mx-2 my-2 flex-auto flex-col">
            <button
              disabled
              className="ml-2 items-center rounded-full bg-[#FFDCE0]"
            >
              <h1 className="px-2 py-1 font-semibold text-gray-700">
                Next week
              </h1>
            </button>
            <Card
              title="Culture workshop"
              description="Description"
              tag="Due 24/11"
              color="bg-red-300"
            />
             <Card
              title="Deadline of project"
              description="Description"
              tag="Due 21/11"
              color="bg-red-300"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
