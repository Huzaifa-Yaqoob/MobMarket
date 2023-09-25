export function Completed() {
  return (
    <div className="bg-success text-destructive-foreground w-fit p-1 rounded font-bold">
      Completed
    </div>
  );
}

export function Ongoing() {
  return (
    <div className="bg-success text-destructive-foreground w-fit p-1 rounded font-bold">
      Ongoing
    </div>
  );
}

export function Delayed() {
  return (
    <div className="bg-warning text-destructive-foreground w-fit p-1 rounded font-bold">
      Delayed
    </div>
  );
}

export function Cancel() {
  return (
    <div className="bg-destructive text-destructive-foreground w-fit p-1 rounded font-bold">
      Cancelled
    </div>
  );
}
