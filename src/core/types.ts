import { FC, PropsWithChildren } from "react";

// Custom Type for a React functional component with props AND CHILDREN
// eslint-disable-next-line @typescript-eslint/ban-types
export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export type Maybe<T> = T | undefined | null;
