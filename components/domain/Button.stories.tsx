import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "../ui/button";

const meta = {
  title: "Domain/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
};

export const HoverConfirmedColor: Story = {
  args: {
    variant: "default",
    children: "Hover Button",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const HoverPercentColor: Story = {
  args: {
    variant: "default",
    children: "Hover Button",
    className: "hover:bg-primary/80",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Pressed: Story = {
  args: {
    variant: "default",
    children: "Clicked Button",
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: "default",
    children: (
      <div className="flex items-center gap-2">
        <svg
          className="size-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading Button
      </div>
    ),
    disabled: true,
  },
};
