import { TypographyInlineCode } from "./TypographyInlineCode";

export function TypographyList({ list }: { list: string[] }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {list.map((item, index) => (
        <li key={index}>
          <TypographyInlineCode>{item}</TypographyInlineCode>
        </li>
      ))}
    </ul>
  );
}
