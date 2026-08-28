import type { SVGProps } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { CHART_CARDS } from "../constants";

type BarShapeProps = SVGProps<SVGRectElement> & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

function DualBarShape(props: BarShapeProps) {
  const { x = 0, y = 0, width = 0, height = 0 } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#141414" fillOpacity={0.05} />
      <rect x={x} y={y} width={width} height={2} fill="#141414" />
    </g>
  );
}

export function InvestmentSection() {
  return (
    <section id="investment" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-3xl font-medium leading-[1.1] tracking-tight text-[#141414] md:col-span-6 md:text-5xl"
            data-editable
            data-preset-text="investment-headline"
          >
            Trusted frameworks for secure growth
          </h2>
          <div className="space-y-4 text-[14px] leading-relaxed text-[#A5A5A5] md:col-span-5 md:col-start-8">
            <p data-editable>
              Our holdings go beyond floor plans; they represent a vehicle for your wealth to thrive
              consistently.
            </p>
            <p data-editable>
              We meticulously vet the premier market offerings for our valued partners.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CHART_CARDS.map((card) => {
            const chartData = card.data.map((value, index) => ({ index, value }));
            return (
              <div
                key={card.title}
                className="flex aspect-video flex-col justify-between bg-white p-6 md:aspect-[1.8/1]"
              >
                <div>
                  <p
                    className="text-[12px] font-medium uppercase tracking-tight text-[#141414]/40"
                    data-editable
                  >
                    {card.title}
                  </p>
                  <p className="mt-2 text-4xl font-medium text-[#141414]" data-editable>
                    {card.value}
                  </p>
                </div>
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <Bar dataKey="value" shape={<DualBarShape />} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
