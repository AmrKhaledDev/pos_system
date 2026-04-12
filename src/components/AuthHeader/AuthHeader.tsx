import { ElementType } from "react";
// ===========================================
function AuthHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: ElementType;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Icon className="size-17 text-yellow-700 shadow bg-yellow-100 p-3 rounded-2xl" />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}

export default AuthHeader;
