import { FC } from "react";

type ConsoleProps = {
  outputs: string[][];
};

export const Console: FC<ConsoleProps> = ({ outputs }) => (
  <div className="flex flex-col h-full justify-start">
    <h5 className="text-xl p-4 pb-1">Console:</h5>
    <div className="bg-slate-100 h-full overflow-y-scroll">
      {outputs.map((output, index) => (
        <div key={index} className="text-sm w-full border-b border-slate-300">
          {output.map((line, index) => (
            <div key={index} className="text-sm ps-4 py-3">
              {line}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);
