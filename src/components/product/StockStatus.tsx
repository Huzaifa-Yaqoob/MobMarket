export default function StockStatus({
  status,
}: {
  status: string;
}): React.ReactElement {
  if (status === "In Stock") {
    return <div className="text-success text-xs">{status}</div>;
  } else if (status === "Out of Stock") {
    return <div className="text-destructive text-xs">{status}</div>;
  } else {
    return <div className="text-destructive text-xs">undefined</div>;
  }
}
