"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export default function SalesChart({ salesData, className, gold=false }) {
  // Data for the last 13 days
  if (salesData === undefined)
    salesData = [
      { date: "18 feb", sales: 17000 },
      { date: "19 feb", sales: 20000 },
      { date: "20 feb", sales: 17000 },
      { date: "21 feb", sales: 21000 },
      { date: "22 feb", sales: 16000 },
      { date: "23 feb", sales: 12500 },
      { date: "24 feb", sales: 24000 },
      { date: "25 feb", sales: 15500 },
      { date: "26 feb", sales: 7000 },
      { date: "27 feb", sales: 18500 },
      { date: "28 feb", sales: 21000 },
      { date: "1 mar", sales: 21000 },
      { date: "2 mar", sales: 23500 },
      { date: "3 mar", sales: 15500 },
      { date: "4 mar", sales: 16500 },
    ];

  // Calculate the maximum value for the y-axis (rounded up to nearest 10k)
  const maxSales =
    Math.ceil(Math.max(...salesData.map((item) => item.sales)) / 10000) *
      10000 +
    10000;

  // Generate y-axis ticks at 10k intervals
  const yAxisTicks = Array.from(
    { length: maxSales / 10000 + 1 },
    (_, i) => i * 10000
  );

  // State to track window width for responsive design
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine how many ticks to show based on screen size
  const getTickInterval = () => {
    if (windowWidth < 500) return 5; // Show every 4th tick on very small screens
    if (windowWidth < 768) return 2; // Show every 3rd tick on small screens
    if (windowWidth < 1024) return 1; // Show every 2nd tick on medium screens
    return 0; // Show all ticks on large screens
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
          <p className="font-semibold text-sm">{label}</p>
          <p className="text-black text-base">
            Sales:{" "}
            <span className="text-[#DBA514]">
              ${payload[0].value.toLocaleString()}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cn("w-full h-[380px] bg-white p-4", className)}>
      <ChartContainer
        config={{
          sales: {
            label: "Sales",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-full w-full"
      >
        <ComposedChart
          data={salesData}
          margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#e5e5e5"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="date"
            axisLine={{ stroke: "#e5e5e5" }}
            tickLine={false}
            dy={10}
            interval={getTickInterval()}
            tick={{ fill: "#222" }}
            style={{ fill: "#222", "font-weight": "500", "font-size": "13px" }}
          />
          <YAxis
            axisLine={{ stroke: "#e5e5e5" }}
            tickLine={false}
            ticks={yAxisTicks}
            tickFormatter={(value) => `${value / 1000}k`}
            domain={[0, maxSales]}
            tick={{ fill: "#222" }}
            style={{ fill: "#222", "font-weight": "500", "font-size": "13px" }}
          />
          <ChartTooltip cursor={true} content={<CustomTooltip />} />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="2.3%" stopColor="#DBA514" />
              <stop offset="35.25%" stopColor="#EEB609" />
              <stop offset="97.79%" stopColor="#FCC201" />
            </linearGradient>
          </defs>
          <Bar
            dataKey="sales"
            fill={gold ? "url(#goldGradient)" : "#C8C8C8"}
            radius={[4, 4, 0, 0]}
            barSize={50} // Reduced bar size to create more gap
            maxBarSize={50}
          />
          <Line
            type="linear"
            dataKey="sales"
            stroke="#222"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#000000",
              stroke: "#000000",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "#222",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </ComposedChart>
      </ChartContainer>
    </div>
  );
}
