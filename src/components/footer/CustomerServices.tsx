export default function CustomerServices(): React.ReactElement {
  return (
    <div>
      <h3 className="font-bold">Customer Services</h3>
      <ul className="text-xs">
        <li className="hover:text-primary w-fit cursor-pointer">
          Return Policy
        </li>
        <li className="hover:text-primary w-fit cursor-pointer">
          Privacy Policy
        </li>
        <li className="hover:text-primary w-fit cursor-pointer">
          Terms of Service
        </li>
      </ul>
    </div>
  );
}
