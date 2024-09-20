
export function Admin({
  h1Heading, children,
}: {
  h1Heading: string;
  children: React.ReactNode
}): JSX.Element {
  return (
    <div>
      <h1>
        {h1Heading}
      </h1>
      {children}
    </div>
  )
}
