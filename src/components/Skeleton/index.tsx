interface Props {
  repetition: number;
}
export function Skeleton({ repetition }: Props) {
  return (
    <div>
      {Array.from({ length: repetition }, (_, index) => (
        <div key={index}>Skeleton </div>
      ))}
    </div>
  );
}
