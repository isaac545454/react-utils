import { ReactNode } from "react";
import { IResponsePost } from "../../Home/types";

export type ListPostsProps = {
    data: IResponsePost[];
}

export type ContainerProps = {
    isloading: boolean;
    isErrror: boolean;
    children: ReactNode;
}
