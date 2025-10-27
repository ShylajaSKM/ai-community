export default function Home() {
  return (
    <div className="w-screen bg-white min-h-screen">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <div key={num} className="bg-black">
          {" "}
          Week {num}{" "}
        </div>
      ))}
    </div>
  );
}
