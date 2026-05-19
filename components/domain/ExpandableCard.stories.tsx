import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ExpandableCard } from "./ExpandableCard";

const meta = {
  title: "Domain/ExpandableCard",
  component: ExpandableCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    stiffness: {
      control: { type: "range", min: 50, max: 500, step: 1 },
    },
    damping: {
      control: { type: "range", min: 0, max: 50, step: 1 },
    },
  },
  args: {
    title: "상세 내용을 확인해 보세요",
    summary: "카드를 클릭하면 아래 영역이 부드럽게 펼쳐집니다.",
    details:
      "이 카드에는 사용자에게 필요한 핵심 정보와 보조 설명을 함께 담을 수 있습니다. 애니메이션은 framer-motion의 spring transition을 사용하며, stiffness와 damping 값을 Storybook에서 직접 조절할 수 있습니다.",
    stiffness: 100,
    damping: 20,
  },
} satisfies Meta<typeof ExpandableCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bouncy: Story = {
  args: {
    stiffness: 220,
    damping: 14,
  },
};

export const Soft: Story = {
  args: {
    stiffness: 80,
    damping: 28,
  },
};
