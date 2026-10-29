export function VideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="player" role="img" aria-label={label}>
      <span aria-hidden="true" />
    </div>
  );
}
