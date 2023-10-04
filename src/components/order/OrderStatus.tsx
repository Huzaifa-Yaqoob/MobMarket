const statusValues = ["Completed", "Ongoing", "Delayed", "Cancelled"];

export default function Status({ status }: { status: string }) {
  if (status === statusValues[0]) {
    return (
      <div className="bg-success text-destructive-foreground w-fit p-1 rounded font-bold">
        {status}
      </div>
    );
  } else if (status === statusValues[1]) {
    return (
      <div className="bg-success text-destructive-foreground w-fit p-1 rounded font-bold">
        {status}
      </div>
    );
  } else if (status === statusValues[2]) {
    return (
      <div className="bg-warning text-destructive-foreground w-fit p-1 rounded font-bold">
        {status}
      </div>
    );
  } else if (status === statusValues[3]) {
    return (
      <div className="bg-destructive text-destructive-foreground w-fit p-1 rounded font-bold">
        Cancelled
      </div>
    );
  }
  return (
    <div className="bg-destructive text-destructive-foreground w-fit p-1 rounded font-bold">
      {status}
    </div>
  );
}
