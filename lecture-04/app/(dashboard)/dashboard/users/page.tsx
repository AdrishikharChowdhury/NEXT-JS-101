import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

const Users = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  if (!response.ok) throw new Error("Failed to Fetch Data");
  const data = await response.json();
  const pokemons: Pokemon[] = data.results;

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <p className="text-4xl font-extrabold">Pokemons</p>
      <ul className="w-full flex h-full gap-6 flex-wrap justify-center">
        {pokemons.map((pokemon, idx) => (
          <li
            className="w-100 h-120 bg-zinc-800 flex justify-center items-center flex-col rounded-2xl"
            key={idx}
          >
            <p className="text-4xl font-bold">{capitalizeFirstLetter(pokemon.name.toString())}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
