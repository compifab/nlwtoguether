import { ReactNode } from "react";
import "./styles.scss";
import classNames from "classnames";

type QuestionType = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({ content, author, isAnswered = false, isHighlighted = false, children }: QuestionType) {
  return (
    <div className={classNames("question", { answered: isAnswered }, { highlighted: isHighlighted && !isAnswered })}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
