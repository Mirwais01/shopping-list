export default function Footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const day = newDate.getDay();
  const month = newDate.getMonth() + 1;

  return (
    <div className="bg-darkViolet text-white">
      <p className="text-center py-6 md:py-12 text-lightAntique">
        All rights reserved &#169; {year}/{month}/{day}
      </p>
    </div>
  );
}
