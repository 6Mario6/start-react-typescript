import { ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children: ReactNode;
}
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
