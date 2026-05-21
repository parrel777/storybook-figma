"use client";

import React from "react";
import { RecommendCard } from "@/components/domain/RecommendCard";
import { ExpandableCard } from "@/components/domain/ExpandableCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Showcase() {
  return (
    <section className="w-full mt-8 flex flex-col items-center gap-6">
      <div className="w-full max-w-3xl grid gap-4">
        <RecommendCard
          title="태안 해변"
          description="충남 태안에 위치한 아름다운 모래언덕입니다."
        />

        <ExpandableCard title="확장형 카드" summary="요약 정보입니다." />

        <Card>
          <CardHeader>
            <CardTitle>UI Card</CardTitle>
          </CardHeader>
          <CardContent>이곳은 Card 컴포넌트의 예시 내용입니다.</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </section>
  );
}
