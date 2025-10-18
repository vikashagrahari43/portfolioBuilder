interface Props {
  children: React.ReactNode;
}
export default function ({ children }: Props) {
  return (
    <div className="min-h-screen  mx-auto w-full bg-neutral-100 dark:bg-neutral-950">
      {children}
    </div>
  );
}
