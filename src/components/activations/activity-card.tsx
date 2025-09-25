import React from "react";
import { Card, CardBody } from "@heroui/react";

interface ActivityCardProps {
  title: string;
  description: string;
  duration: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  duration
}) => {
  return (
    <Card className="bg-pomegranate-700/50 border border-white/20 hover:bg-pomegranate-700/70 transition-all">
      <CardBody className="p-6">
        <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
        <p className="text-white/80 text-sm mb-2">{description}</p>
        <p className="text-white/60 text-sm">({duration})</p>
      </CardBody>
    </Card>
  );
};