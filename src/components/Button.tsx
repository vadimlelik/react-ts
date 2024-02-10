import { IPost } from "../types/type";
import { useDeletePostMutation } from "../entities/post";
import { ReactNode } from "react";

interface IButtonProps {
  id: IPost["id"];
  children: ReactNode;
}
const Button = ({ id, children }: IButtonProps) => {
  const [deletePost] = useDeletePostMutation();
  return (
    <div
      onClick={() => {
        deletePost(id);
      }}
    >
      {children}
    </div>
  );
};

export default Button;
