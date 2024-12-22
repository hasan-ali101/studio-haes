type Role = {
  title: string;
  start: string;
  end: string;
  description: string;
};

type Job = {
  company: string;
  roles: Role[];
};

const jobs: Job[] = [
  {
    company: "NOVA Wealth",
    roles: [
      {
        title: "Software Developer",
        start: "December 2024",
        end: "Present",
        description:
          "Something about my role mething about my role Something about my role Something about",
      },
      {
        title: "Junior Software Developer",
        start: "May 2024",
        end: "December 2024",
        description:
          "Something about my rol my role Something about myrole Something about my role Something about my role Something about",
      },
      {
        title: "Operations Analyst",
        start: "May 2022",
        end: "May 2024",
        description:
          "Something about my roe Something about myrole Something about my role Something about my role Something about",
      },
    ],
  },
  {
    company: "MILK Management",
    roles: [
      {
        title: "Model",
        start: "September 2019",
        end: "Present",
        description:
          "Something about my role Something about thing about my role Something about my role Something about",
      },
    ],
  },
];

const volunteerJobs: Job[] = [
  {
    company: "Human Rights Implementation Centre",
    roles: [
      {
        title: "Research Associate",
        start: "September 2018",
        end: "June 2019",
        description:
          "Something about my role Somy role Something about my role Something about",
      },
    ],
  },
  {
    company: "Projects Abroad Human Rights Office",
    roles: [
      {
        title: "Legal Caseworker",
        start: "Octopber 2017",
        end: "June 2020",
        description:
          "Something about my role Something about my r Something about my role Something about my role Something about",
      },
    ],
  },
];

const CV = () => {
  return (
    <div className="flex flex-col gap-4 overflow-auto pb-10 text-sm">
      <p className="text-secondary/70 text-lg">WORK HISTORY</p>
      {jobs.map((job) => (
        <div className="flex w-full flex-col gap-4 border border-white/30 p-2">
          <p className="font-bold">{job.company}</p>
          {job.roles.map((role) => (
            <div className="flex flex-col">
              <div className="bg-primary/20 flex justify-between gap-2 border p-2">
                <p className="font-semibold">{role.title}</p>
                <p className="text-xs">
                  {role.start} - {role.end}
                </p>
              </div>
              <div className="border-x border-b p-2 leading-6">
                {role.description}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-12 gap-4">
        <p className="text-secondary/70 col-span-12 text-lg">EDUCATION</p>
        <div className="col-span-6 border p-2 text-sm">
          <p className="font-semibold">University of Bristol</p>
          <p> LLM Human Rights Law</p>
          <p>Merit (65%)</p>
        </div>
        <div className="col-span-6 border p-2 text-sm">
          <p className="font-semibold">University of York</p>
          <p>LLB Law</p>
          <p>First-class Honours (70%)</p>
        </div>
        <div className="col-span-6 border p-2 text-sm">
          <p className="font-semibold">A-Levels</p>
          <p>Physics A* | Biology A | Maths B</p>
        </div>
        <div className="col-span-6 border p-2 text-sm">
          <p className="font-semibold">GCSEs</p>
          <p>4A*s | 4As | 2Bs</p>
        </div>
      </div>

      <p className="text-secondary/70 text-lg">VOLUNTARY WORK</p>

      {volunteerJobs.map((job) => (
        <div className="flex w-full flex-col gap-4 border border-white/30 p-2">
          <p className="font-bold">{job.company}</p>
          {job.roles.map((role) => (
            <div className="flex flex-col">
              <div className="bg-primary/20 flex justify-between gap-2 border p-2">
                <p className="font-semibold">{role.title}</p>
                <p className="text-xs">
                  {role.start} - {role.end}
                </p>
              </div>
              <div className="border-x border-b p-2 leading-6">
                {role.description}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CV;
