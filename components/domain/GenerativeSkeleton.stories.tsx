import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function GenerativeSkeleton() {
  return (
    <div className="w-87.5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="animate-pulse space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-slate-200" />
          <div className="flex-1 space-y-3">
            <div className="h-4 w-28 rounded-full bg-purple-200" />
            <div className="h-3 w-40 rounded-full bg-slate-200" />
          </div>
          <div className="h-8 w-16 rounded-full bg-purple-100" />
        </div>

        <div className="space-y-3">
          <div className="h-4 w-4/5 rounded-full bg-slate-200" />
          <div className="h-4 w-11/12 rounded-full bg-slate-200" />
          <div className="h-4 w-3/4 rounded-full bg-slate-200" />
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <div className="space-y-3">
            <div className="h-3 w-24 rounded-full bg-purple-200" />
            <div className="h-3 w-full rounded-full bg-slate-200" />
            <div className="h-3 w-5/6 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/2 rounded-full bg-slate-200" />
            <div className="h-3 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Domain/GenerativeSkeleton",
  component: GenerativeSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GenerativeSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
