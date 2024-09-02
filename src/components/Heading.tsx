import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  children: React.ReactNode;
};


export function Heading({ className, children }: Props) {
  return (
    <h1
      className={`text-4xl font-bold text-center text-stone-900 ${className}`}
    >
      {children}
    </h1>
  );
}
