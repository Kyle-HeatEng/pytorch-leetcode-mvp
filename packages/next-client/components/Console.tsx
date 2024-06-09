import { FC } from "react";

type ConsoleProps = {
    output: string;
};

export const Console: FC<ConsoleProps> = ({ output }) => (
  <div className="flex flex-col h-full justify-start">
    <h5 className="text-xl p-4 pb-1">Console</h5>
    <div className="bg-slate-200 h-full overflow-y-scroll">
      {output.split("\n").map((line, index) => (
        <div key={index} className="text-sm px-2 py-3">
          {line}
        </div>
      ))}
    </div>
  </div>
);