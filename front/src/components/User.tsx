import { FC } from "react";
import { UserResponse } from "../types";
import { patchUser } from "../util";

type Props = UserResponse & {
  fobid?: number;
};

export const User: FC<Props> = (props) => {
  const updateUserPhone = (event: any) => {
    event.preventDefault();
    patchUser(props.userid);
  };
  return (
    <div className="item joke">
      <div className="joke-attributes">
        <span className="info-title">{props.name}</span>
      </div>
      <span>Phone:</span>
      <form onSubmit={updateUserPhone}>
        <input name={props.userid?.toString() ?? props.name} defaultValue={props.phone} />
        <button className="button" onClick={updateUserPhone} type="submit">Update</button>
      </form>
      <div className="joke-info">
        <div className="detail">
          <span className="info-title">ID:</span>
          <span>{props.userid}</span>
        </div>
      </div>
    </div>
  );
};
