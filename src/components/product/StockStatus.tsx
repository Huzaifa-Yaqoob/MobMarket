export default function StockStatus({ status }: { status: string }) {
  if (status === "In Stock") {
    return <div className="text-success text-xs">{status}</div>;
  } else if (status === "Out of Stock") {
    return <div className="text-destructive text-xs">{status}</div>;
  }
}
