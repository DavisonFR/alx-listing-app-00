import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
