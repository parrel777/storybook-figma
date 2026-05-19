import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RecommendCard } from "./RecommendCard";

const meta = {
  title: "Domain/RecommendCard",
  component: RecommendCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RecommendCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "태안 해변",
    description: "충남 태안에 위치한 아름다운 모래언덕입니다.",
  },
};

export const LongTextEdgeCase: Story = {
  args: {
    title: "태안 해변",
    description:
      "충남 태안에 위치한 아름다운 모래언덕입니다. 천연기념물 제431호로 지정되어 있으며, 넓고 펼쳐진 모래사장이 특징입니다. 이곳은 매년 많은 관광객들이 방문하는 명소로 알려져 있습니다. 특히 해질녘 노을의 경치가 아름답고, 여름철에는 해수욕을 즐길 수 있습니다.",
  },
};
