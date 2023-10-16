export default function WhyMobMarket(): React.ReactElement {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-primary border-l-8 border-primary pl-2">
        Why Choose MobMarket?
      </h1>
      <main className="flex flex-col lg:flex-row gap-4">
        <section className="text-center space-y-2">
          <h3 className="text-lg font-bold text-primary border-b-4 border-primary pl-2 ">
            Quality Assurance
          </h3>
          <p>
            We handpick every product in our catalog to ensure they meet the
            highest standards of quality and performance.
          </p>
        </section>
        <section className="text-center space-y-2">
          <h3 className="text-lg font-bold text-primary border-b-4 border-primary pl-2">
            Expert Advice
          </h3>
          <p>
            Our team of tech experts is here to provide you with personalized
            recommendations and answer all your tech-related questions.
          </p>
        </section>
        <section className="text-center space-y-2">
          <h3 className="text-lg font-bold text-primary border-b-4 border-primary pl-2 ">
            Customer-Centric-Approach
          </h3>
          <p>
            Your satisfaction is our top priority. We go the extra mile to make
            your shopping experience with us enjoyable and hassle-free.
          </p>
        </section>
      </main>
    </div>
  );
}
