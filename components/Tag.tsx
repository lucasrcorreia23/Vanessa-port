export function Tag({ children }: { children: string }) {
  return (
    <li className="inline-flex h-8 items-center rounded-full border border-line px-4">
      {children}
    </li>
  );
}
