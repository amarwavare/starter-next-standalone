import { ReactNode } from "react";

export interface IComponentWithChildren {
    children?: ReactNode | undefined;
}
export interface IPageWrapperProps extends IComponentWithChildren {
    title: string;
}