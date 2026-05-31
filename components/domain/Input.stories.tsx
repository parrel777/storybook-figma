import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../ui/input";

const meta = {
  title: "Domain/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "내용을 입력하세요.",
  },
};

export const Hover: Story = {
  args: {
    type: "text",
    placeholder: "내용을 입력하세요.",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focused_visible: Story = {
  args: {
    type: "text",
    placeholder: "키보드로 접근시에만 적용. Tab키로 접근",
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Focused: Story = {
  args: {
    type: "text",
    placeholder: "모든 접근시에 적용. 마우스 클릭",
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "내용을 입력하세요.",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    type: "text",
    placeholder: "내용을 입력하세요.",  
    "aria-invalid": true,
  },
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Input {...args} />
      <span className="flex items-center gap-1.5 text-sm font-medium text-destructive">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        최소 2자 이상 입력해주세요.
      </span>
    </div>
  ),
};