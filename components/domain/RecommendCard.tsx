interface RecommendCardProps {
  title: string;
  description: string;
}

export function RecommendCard({ title, description }: RecommendCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 line-clamp-2">{description}</p>
    </div>
  );
}
