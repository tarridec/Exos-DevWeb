import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import usePokemonList from "../contexts/pokemonList";
import POKEMON_TYPES from "../const/pokemonTypes";

export default function PokemonList() {
  const [pokemons, setPokemons] = usePokemonList();
  const [name, setTitre] = useState("");
  const [pv, setDescription] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setSpecialDefense] = useState("");
  const [vitesse, setVitesse] = useState("");
  const [type, setType] = useState("Acier");
  const [type2, setType2] = useState("");

  {/*const options = [
    { value: 'Steel', label: 'Acier'},
    { value: 'Fighting', label: 'Combat'},
    { value: 'Dragon', label: 'Dragon'},
    { value: 'Water', label: 'Eau'},
    { value: 'Electric', label: 'Electrique'},
    { value: 'Fairy', label: 'Fée'},
    { value: 'Fire', label: 'Feu'},
    { value: 'Ice', label: 'Glace'},
    { value: 'Bug', label: 'Insecte'},
    { value: 'Normal', label: 'Normal'},
    { value: 'Grass', label: 'Plante'},
    { value: 'Poison', label: 'Poison'},
    { value: 'Psychic', label: 'Psy'},
    { value: 'Rock', label: 'Roche'},
    { value: 'Ground', label: 'Sol'},
    { value: 'Ghost', label: 'Spectre'},
    { value: 'Dark', label: 'Ténèbre'},
    { value: 'Flying', label: 'Vol'},
  ]*/}

  const navigate = useNavigate();

  const _onSubmit = (e) => {
    e.preventDefault();

    setPokemons([
      ...pokemons,
      {
        id: Math.ceil(Math.random() * 10000000),
        name,
        pv,
        attack,
        defense,
        specialAttack,
        specialDefense,
        vitesse,
        type,
        type2,
      }
    ])

    setTitre("");
    setDescription("");
    setAttack("");
    setDefense("");
    setSpecialAttack("");
    setSpecialDefense("");
    setVitesse("");
    setType("Acier");
    setType2(null);
  }

  return (
    <div className="flex flex-col justify-center px-6 py-4 gap-8">
      <form onSubmit={_onSubmit} className="min-w-96 flex flex-col gap-3 mt-4 border p-3 rounded-xl">
        <h2 className="text-xl text-center font-bold underline">Nouveau Pokemon</h2>
        <Input 
          value={name} 
          onChange={e => setTitre(e.target.value)}
          placeholder="Nom..."
        />
        <Input 
          value={pv} 
          onChange={e => setDescription(e.target.value)}
          type="number"
          placeholder="PV..."
        />
        <Input 
          value={attack} 
          onChange={e => setAttack(e.target.value)}
          type="number" 
          placeholder="Attaque..." 
        />
        <Input 
          value={defense} 
          onChange={e => setDefense(e.target.value)}
          type="number" 
          placeholder="Défense..." 
        />
        <Input 
          value={specialAttack} 
          onChange={e => setSpecialAttack(e.target.value)}
          type="number" 
          placeholder="Attaque spécial..." 
        />
        <Input 
          value={specialDefense} 
          onChange={e => setSpecialDefense(e.target.value)}
          type="number" 
          placeholder="Défense spécial..." 
        />
        <Input 
          value={vitesse} 
          onChange={e => setVitesse(e.target.value)}
          type="number" 
          placeholder="Vitesse..." 
        />

        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="1er type...">{type}</SelectValue>
          </SelectTrigger>

          <SelectContent>
            {POKEMON_TYPES.filter(i => i !== type2)
                          .map(t => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
          </SelectContent>
        </Select>

        <Select value={type2} onValueChange={setType2}>
          <SelectTrigger>
            <SelectValue placeholder="2ème type...">{type2}</SelectValue>
          </SelectTrigger>

          <SelectContent>
            {POKEMON_TYPES.filter(i => i !== type)
                          .map(t => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
          </SelectContent>
        </Select>

        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => navigate("/")}>Annuler</Button>
          <Button type="submit">Ajouter</Button>
        </div>
      </form>

      <Table>
        <TableCaption>Une liste de vos pokémons...</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nom</TableHead>
            <TableHead>PV</TableHead>
            <TableHead>Attaque</TableHead>
            <TableHead>Défense</TableHead>
            <TableHead>Attaque Spéciale</TableHead>
            <TableHead>Défense Spéciale</TableHead>
            <TableHead>Vitesse</TableHead>
            <TableHead className="text-right">Type</TableHead>
            <TableHead className="text-right">Détail</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pokemons.map((p) => (
            <TableRow key={p.p}>
              <TableCell className="font-medium">{p.name}</TableCell>
              <TableCell>{p.pv}</TableCell>
              <TableCell>{p.attack}</TableCell>
              <TableCell>{p.defense}</TableCell>
              <TableCell>{p.specialAttack}</TableCell>
              <TableCell>{p.specialDefense}</TableCell>
              <TableCell>{p.vitesse}</TableCell>
              <TableCell className="text-right">{p.type}{p.type2 ? ` - ${p.type2}` : ""}</TableCell>
              <TableCell className="text-right">
                <Button onClick={() => navigate(`/pokemons/${p.id}`)} variant="ghost">Voir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
