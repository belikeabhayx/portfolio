import { Technology } from "../../data/project";


interface TechBadgeProps {
  tech: Technology;
  size?: "sm" | "md" | "lg";
}

const TechBadge = ({ tech, size = "md" }: TechBadgeProps) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses[size]} bg-background-muted`}
      style={{ border: `1px solid ${tech.color}` }}
    >
      <span
        className="mr-1.5 h-2 w-2 rounded-full"
        style={{ backgroundColor: tech.color }}
      ></span>
      {tech.name}
    </span>
  );
};

export default TechBadge;
