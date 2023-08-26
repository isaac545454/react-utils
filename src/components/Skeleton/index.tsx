interface Props {
  repetition: number;
}
export default function Skeleton({ repetition }: Props) {
  return (
    <div>
      {Array.from({ length: repetition }, (_, index) => (
        <div key={index}>Skeleton </div>
      ))}
    </div>
  );
}
