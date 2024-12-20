export default function Feature({ icon, text }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <span className="text-2xl mr-3">{icon}</span>
      <span>{text}</span>
    </div>
  );
} 