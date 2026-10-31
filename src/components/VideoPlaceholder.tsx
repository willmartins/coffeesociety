export function VideoPlaceholder({
  label,
  imageUrl,
  compact = false,
}: {
  label: string;
  imageUrl?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={compact ? "player player--compact" : "player"}
      role="img"
      aria-label={label}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
    >
      {imageUrl ? null : <span aria-hidden="true" />}
    </div>
  );
}
