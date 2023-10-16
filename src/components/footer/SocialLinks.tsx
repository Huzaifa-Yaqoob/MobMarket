export default function SocialLinks(): React.ReactElement {
  return (
    <div>
      <div className="flex items-center">
        <h3 className="font-bold">Social Links</h3>
      </div>
      <ul className="text-xs">
        <li className="hover:text-primary w-fit cursor-pointer">Facebook</li>
        <li className="hover:text-primary w-fit cursor-pointer">Instagram</li>
        <li className="hover:text-primary w-fit cursor-pointer">X</li>
      </ul>
    </div>
  );
}
