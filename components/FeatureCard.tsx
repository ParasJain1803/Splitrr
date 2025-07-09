import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}) => (
  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
    <CardContent className="p-6 text-center space-y-4">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center mx-auto`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

export default FeatureCard;
