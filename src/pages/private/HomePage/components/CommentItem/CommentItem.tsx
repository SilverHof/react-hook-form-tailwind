import { Link } from "react-router-dom";
import { deleteComment } from "../../../../../api/setup";
import { Button } from "../../../../../components/Button/Button";
import "./CommentItem.scss";

interface CommentItemProps {
   to: string;
   id: number;
   name: string;
   email: string;
   body: string;
}

export const CommentItem = ({
   to,
   id,
   name,
   email,
   body,
}: CommentItemProps) => {
   const handleDelete = () => {
      deleteComment(id)
         .then((result) => {
            console.log(result);
            alert("Successfully deleted comment");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="comment-item">
         <div className="comment__content">
            <h2 className="comment-item__name">{name}</h2>
            <h2 className="comment-item__email">{email}</h2>
            <p className="comment-item__text">{body}</p>
         </div>
         <div className="comment-item__buttons">
            <Button
               text="Delete comment"
               onClick={handleDelete}
            />
            <Link to={to}>Go to comment</Link>
         </div>
      </div>
   );
};
