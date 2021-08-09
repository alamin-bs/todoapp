import { useRef } from "react";
import { Input } from "antd";
export const useFocus = () => {
  const htmlElRef = useRef<Input>(null);
  const setFocus = () => {
    const currentEl = htmlElRef.current;
    currentEl && currentEl.focus();
  };
  return [htmlElRef, setFocus] as const;
};
