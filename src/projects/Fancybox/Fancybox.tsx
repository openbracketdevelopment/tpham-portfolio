"use client";

import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type FancyboxProps = {
  delegate?: string;
  options?: Parameters<typeof NativeFancybox.bind>[1];
  children?: React.ReactNode;
};

function Fancybox(props: FancyboxProps) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.unbind(delegate);
      NativeFancybox.close();
    };
  }, [delegate, props.options]);

  return <>{props.children}</>;
}

export default Fancybox;
