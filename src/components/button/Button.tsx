import { ComponentProps } from "react";
type TVariant = "primary" | "secondery" | "danger" | "success" | "warning";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button
      {...rest}
      style={{
        borderRadius: "4px",
        padding: "4px 8px",
        ...style,
        ...checkvariant(variant),
      }}
    >
      {children}
    </button>
  );
}

export default Button;

function checkvariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "blue", color: "white" };
  } else if (variant === "secondery") {
    return { backgroundColor: "gray", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}
