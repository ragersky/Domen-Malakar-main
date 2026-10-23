import { Link } from "react-router-dom";

export default function PricingCard({ title, packageDetails, isHighlighted }) {
  return (
    <div
      className={`border rounded-lg p-8 flex flex-col h-full ${
        isHighlighted ? "bg-gray-900 text-white" : ""
      }`}
    >
      <h2 className="text-2xl font-serif text-center mb-8">{title}</h2>
      <div className="space-y-4 flex-grow">
        {packageDetails.map((detail, index) => (
          <p key={index} className={`text-center pb-4 text-lg `}>
            {detail}
          </p>
        ))}
      </div>

      <Link to="/kontakt" className="mt-6">
        <button className="btn btn-sm hover:text-white duration-300">
          <span>KONTAKT</span>
        </button>
      </Link>
    </div>
  );
}
