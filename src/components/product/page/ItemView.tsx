import ItemBox from "./ItemBox";
import ItemVariant from "./ItemVariant";
import ItemSpecsBox from "./ItemSpecsBox";

export default function ItemView(): React.ReactElement {
  return (
    <section className="flex flex-col gap-4">
      <ItemBox />
      <ItemSpecsBox />
      <div>
        <span className="text-2xl font-bold">More Info :</span>
        <p className="indent-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          dolorum temporibus pariatur quaerat, minima nobis illo consequatur
          beatae nam corrupti odit odio libero dignissimos? Blanditiis in odit
          cumque consequatur voluptatem corrupti molestiae sequi veritatis, et
          adipisci laboriosam? Sit dolorum, recusandae odit in cupiditate
          pariatur nulla consequatur ipsam nobis voluptate nostrum provident
          distinctio eligendi. Quos et amet magnam non ea magni, optio
          aspernatur culpa corporis molestias officiis rerum provident deleniti
          quisquam architecto adipisci officia veritatis consectetur aperiam.
          Nostrum ipsum in accusantium odit nesciunt iste cum rerum ratione,
          repellendus voluptas ad hic eius praesentium officiis, minima quos id
          autem aliquam at minus quibusdam culpa alias, quasi nulla? Harum cum
          repellendus, temporibus ipsam velit cupiditate et mollitia expedita
          pariatur, corrupti dolorem doloremque labore distinctio fuga dolore
          eos, eaque aut voluptas
        </p>
      </div>
    </section>
  );
}
